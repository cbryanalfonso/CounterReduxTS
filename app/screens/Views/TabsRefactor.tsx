import React, {createContext, useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Define la interfaz para los datos de pestañas
interface TabData {
  name: string;
  label: string;
  content: React.ReactNode;
}

interface TabContextProps {
  tabs: TabData[];
  addTab: (tab: TabData) => void;
  currentTab: string | undefined;
  setCurrentTab: (tab: string) => void;
}

interface TabsProps {
  data: TabData[]; // Agrega la propiedad 'data'
  children: React.ReactNode;
}

interface TabProps extends TabData {}

const TabContext = createContext<TabContextProps>({
  tabs: [],
  addTab: (_: TabData) => {},
  currentTab: undefined,
  setCurrentTab: (_: string) => {},
});

export const Tabs: React.FC<TabsProps> = ({data, children}) => {
  const [tabs, setTabs] = useState<TabData[]>(data);
  const [currentTab, setCurrentTab] = useState<string | undefined>(
    data[0]?.name,
  );

  const addTab = (tab: TabData) => {
    if (!tabs.some(t => t.name === tab.name)) {
      setTabs([...tabs, tab]);
    }
  };

  const handleNext = () => {
    // Agrega aquí la lógica para avanzar a la siguiente pestaña si es necesario
    // Por ejemplo, puedes cambiar la pestaña actual o realizar alguna acción específica
    if (currentTab !== undefined) {
      const currentIndex = tabs.findIndex(tab => tab.name === currentTab);
      const nextIndex = (currentIndex + 1) % tabs.length; // Índice de la siguiente pestaña (cíclico)
      const nextTab = tabs[nextIndex];
      setCurrentTab(nextTab.name);
    }
  };
  return (
    <>
      {/* <TabContext.Provider value={{tabs, addTab, currentTab, setCurrentTab}}>
      <View style={{flexDirection: 'row'}}>
        {tabs.map(({label, name}) => (
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
      {tabs.map(({name, content}) =>
        currentTab === name ? <View key={name}>{content}</View> : null,
      )}
    </TabContext.Provider> */}

      {/* Segunda opción */}

      {/* <TabContext.Provider value={{tabs, addTab, currentTab, setCurrentTab}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            {tabs.map(({name, content}) =>
              currentTab === name ? (
                <View
                  key={name}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: 'black',
                  }}>
                  <Text>{name}</Text>

                  {content}
                </View>
              ) : null,
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 20,
            }}>
            <TouchableOpacity
              onPress={handleNext}
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white'}}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TabContext.Provider> */}

      {/* Tercera opcion */}
      <TabContext.Provider value={{tabs, addTab, currentTab, setCurrentTab}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            {tabs.map(({name, label}) => (
              <TouchableOpacity
                key={name}
                style={{
                  padding: 10,
                  borderBottomWidth: currentTab === name ? 2 : 0,
                  borderBottomColor: 'blue',
                }}
                onPress={() => setCurrentTab(name)}>
                <Text>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{flex: 1}}>
            {tabs.map(({name, content}) =>
              currentTab === name ? (
                <View key={name} style={{flex: 1}}>
                  {content}
                </View>
              ) : null,
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 20,
            }}>
            <TouchableOpacity
              onPress={handleNext}
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white'}}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TabContext.Provider>
    </>
  );
};

export const TabRefactor: React.FC<TabData> = tab => {
  const {content, name} = tab;
  const {addTab, currentTab, tabs} = useContext(TabContext);

  useEffect(() => {
    addTab(tab);
  }, [tab, tabs]);

  return currentTab === name ? <View>{content}</View> : null;
};
