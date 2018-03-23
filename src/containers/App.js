import React, { Component } from 'react';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import SortableTableApp from './SortableTableApp';
import * as reducers from '../reducers';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage: storage
};

const store = createStore(
  persistReducer(persistConfig, rootReducer)
);

const persistor = persistStore(store);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            {() => <SortableTableApp /> }
        </Provider>
      </div>
    );
  }
}
