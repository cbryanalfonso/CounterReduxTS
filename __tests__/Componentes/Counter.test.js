import React from 'react';
import { render } from '@testing-library/react-native';
import Counter from '../../app/components/Text/Counter.tsx';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = { counter: { value: 10 } }; // Estado inicial del mock de store
const store = mockStore(initialState);

test('renders counter value', () => {
    const { getByText } = render(
            <Provider store={store}>
                <Counter />
            </Provider>
    );
    const counterValueText = getByText('10');
    expect(counterValueText).toBeTruthy();
});
