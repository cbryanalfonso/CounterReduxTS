import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <View style={styles.container}>
      {steps.map((label, index) => (
        <TouchableOpacity
          key={label}
          style={[
            styles.step,
            activeStep === index && styles.activeStep,
          ]}
          onPress={() => handleStepClick(index)}
        >
          <Text style={styles.stepLabel}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  step: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  stepLabel: {
    color: 'black',
    textAlign: 'center',
  },
});
