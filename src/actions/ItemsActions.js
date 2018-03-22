import * as types from '../constants/ActionTypes';

export function sortByField(fieldIndex) {  
  return {
    type: types.CHANGE_SORT,
    fieldIndex
  };
}

export function loadFromFile(data) {  
  return {
    type: types.LOAD_FROM_FILE,
    data
  };
}

