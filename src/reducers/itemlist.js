import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

export const initialState = {
  fields: ['Nmae', 'from', 'to'],
  sortByField: -1,
  sortAsc: true,
  items: [
      ['John','Pitsburg', 'San Hose'],
      ['Bob', 'Albuk', 'Freetown']
  ]
};

export default function recordslist(state = initialState, action) {
  switch (action.type) {

    case types.LOAD_FROM_FILE:
      
      var allTextLines = action.data.split(/\r\n|\n/);
      var lines = [];
      var headerLine = allTextLines.shift().split(',');
      while (allTextLines.length) {
          lines.push(allTextLines.shift().split(','));
      }

      return {
        ...state,
        fields: headerLine,
        items: lines
      }

    case types.CHANGE_SORT:
      return {
        ...state,
        sortAsc: action.fieldIndex == state.sortByField ? !state.sortAsc : state.sortAsc,
        sortByField: action.fieldIndex,
      }

    default:
      return state;
  }
}
