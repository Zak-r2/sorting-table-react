import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';

import SortableTableApp from './SortableTableApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    reducers.initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
  );

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <SortableTableApp /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}
