import React from 'react';
import Button from '../../app/components/Button/Button';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonUI from '../../app/components/Button/Button';
import { Text } from 'react-native';


test('renders children correctly', () => {
    const { getByText } = render(
        <ButtonUI onPress={() => { }}>
            <Text>Click me!</Text>
        </ButtonUI>
    );
    const buttonText = getByText('Click me!');
    expect(buttonText).toBeTruthy();
});

test('calls onPress function when button is pressed', () => {
    /* `const onPressMock = jest.fn();` is creating a mock function using Jest's `fn()` method. This
    mock function can be used to simulate the behavior of a real function in a controlled way during
    testing. In this case, it is being used to simulate the `onPress` function that would normally
    be passed to the `ButtonUI` component. The `onPressMock` function is then passed as a prop to
    the `ButtonUI` component and is called when the button is pressed in the second test. The
    `expect(onPressMock).toHaveBeenCalled();` assertion checks that the `onPressMock` function was
    called when the button was pressed. */
    const onPressMock = jest.fn();
    const { getByText } = render(
        <ButtonUI onPress={onPressMock}>
            <Text>Click me!</Text>
        </ButtonUI>
    );
    const button = getByText('Click me!');
    fireEvent.press(button);
    /* `expect(onPressMock).toHaveBeenCalled();` is an assertion that checks whether the `onPressMock`
    function has been called. If the function has been called, the test will pass. If the function
    has not been called, the test will fail. This assertion is used to ensure that the `onPress`
    function is being called when the button is pressed, as expected. */
    expect(onPressMock).toHaveBeenCalled();
});
