import React from 'react';
// import { act, render } from '@testing-library/react-native';
// import  render, act  from 'react-test-renderer'
import { render, act, waitFor } from '@testing-library/react-native';
import HomeProducts from '../../app/screens/Products/HomeProducts';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {
    counter: {
        products: [{
            id: 1,
            title: '...',
            price: '...',
            category: '...',
            description: '...',
            image: '...'
        },]
    }
}; // Estado inicial del mock de store
const store = mockStore(initialState);


// test('renders HomeProducts view', () => {
//     const { getByText } = render(<Provider store={store}>
//         <HomeProducts />
//     </Provider>);
//     const homeProductsText = getByText('HomeProducts');
//     expect(homeProductsText).toBeTruthy();
// });

// test('fetches data from API', async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const json = await response.json();
//     //   setDataStore(json);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   });

// describe("<HomeProducts/>", () => {
//     beforeEach(() => {
//         global.fetch = jest.fn(() => Promise.resolve({
//             json: () => Promise.resolve([{
//                 id: 1,
//                 title: '...',
//                 price: '...',
//                 category: '...',
//                 description: '...',
//                 image: '...'
//             }]),
//         }))
//         component = render(<Provider store={store}>
//             <HomeProducts />
//         </Provider>)
//     });

//     it("Renderiza correctamente", () => {
//         expect(component).toBeDefined();
//         // expect(component.getTestId("Load"))
//     })
// })
        <Provider store={store}>
            <HomeProducts />
        </Provider>


jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  fetch: jest.fn(),
}));

describe('HomeProducts component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data from API and sets dataStore state', async () => {
    const mockData = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 20 },
    ];

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const { getByText } = render(<HomeProducts />);

    await waitFor(() => {
      expect(getByText('HomeProducts')).toBeTruthy();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');

    // Verificar el estado dataStore
    // const { dataStore } = store.getState().counter;
    // expect(dataStore).toEqual(mockData);
  });

  it('fetches data from API and sets dataFilter state', async () => {
    const mockData = [
      { category: 'Category 1' },
      { category: 'Category 2' },
    ];

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const { getByText } = render(<HomeProducts />);

    await waitFor(() => {
      expect(getByText('HomeProducts')).toBeTruthy();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');

    // Verificar el estado dataFilter
    // const { dataFilter } = store.getState().counter;
    // expect(dataFilter).toEqual(['Category 1', 'Category 2']);
  });
});
