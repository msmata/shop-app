import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productoReducer from './store/reducers/productos';
import carritoReducer from './store/reducers/carrito';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  productos: productoReducer,
  carrito: carritoReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
