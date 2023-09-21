import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function StepperExample() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState([]);

  const totalSteps = () => {
    return steps.length;
  };

  const handleNext = () => {
    if (activeStep < totalSteps() - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleComplete = () => {
    if (!completed.includes(activeStep)) {
      setCompleted([...completed, activeStep]);
    }
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted([]);
  };

  return (
    <View style={styles.container}>
      {steps.map((label, index) => (
        <TouchableOpacity
          key={label}
          style={[
            styles.step,
            activeStep === index && styles.activeStep,
            completed.includes(index) && styles.completedStep,
          ]}
          onPress={() => setActiveStep(index)}>
          <Text style={styles.stepLabel}>{label}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          disabled={activeStep === 0}
          onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={
            activeStep === totalSteps() - 1 ? handleReset : handleComplete
          }>
          <Text style={styles.buttonText}>
            {activeStep === totalSteps() - 1 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  step: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  activeStep: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  completedStep: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  stepLabel: {
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
