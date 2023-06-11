import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { getProduct } from '../../business/counterSlice';
import {useAppDispatch} from '../../business/hooks';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  //   const options = ['Option 1', 'Option 2', 'Option 3'];
  const dispatch = useAppDispatch();
  const toggleDropdown = () => {
    // console.log('');
    dispatch(getProduct());
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>
          {selectedOption ? selectedOption : 'Select an option'}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownOptions}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionSelect(option)}
              style={styles.dropdownOption}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200,
    zIndex: 9999,
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 5,
  },
  dropdownOption: {
    padding: 10,
  },
});

export default Dropdown;
