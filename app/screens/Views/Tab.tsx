import React, {createContext, useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Define interfaces como lo hiciste en el código original

interface TabContextProps {
  tabs: TabProps[];
  addTab: (tab: TabProps) => void;
  currentTab: string | undefined;
  setCurrentTab: (tab: string) => void;
}

interface TabProps {
  name: string;
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
}

const TabContext = createContext<TabContextProps>({
  tabs: [],
  addTab: (_: TabProps) => {},
  currentTab: undefined,
  setCurrentTab: (_: string) => {},
});

export const Tabs: React.FC<TabsProps> = ({children}) => {
  const [tabs, setTabs] = useState<TabProps[]>([]);
  const [currentTab, setCurrentTab] = useState<string | undefined>(undefined);

  const addTab = (tab: TabProps) => {
    if (!tabs.map(({name}) => name).includes(tab.name)) {
      setTabs([...tabs, tab]);
    }
  };

  return (
    <TabContext.Provider value={{tabs, addTab, currentTab, setCurrentTab}}>
      <View style={{flexDirection: 'row'}}>
        {tabs
          .sort((a, b) => a.name.localeCompare(b.name) || 0)
          .map(({label, name}) => (
            <View
              key={name}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
              // onPress={() => setCurrentTab(name)}
              >
              <Text>{label}</Text>
            </View>
          ))}
      </View>
      {children}
    </TabContext.Provider>
  );
};

export const Tab: React.FC<TabProps> = (tab: TabProps) => {
  const {children, name} = tab;
  const {addTab, currentTab, tabs} = useContext(TabContext);

  useEffect(() => {
    addTab(tab);
  }, [tab, tabs]);

  return currentTab === name ? (
    <View>
      <Text>{name}</Text>
      {children}
    </View>
  ) : null;
};
