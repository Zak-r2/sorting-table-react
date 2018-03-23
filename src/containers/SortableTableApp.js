import React, { Component, PropTypes } from 'react';
import styles from './SortableTableApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ItemsActions from '../actions/ItemsActions';
import { List, LoadFileInput } from '../components';

@connect(state => ({
  itemlist: state.itemlist
}))
export default class SortableTableApp extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    itemlist: PropTypes.any.isRequired,
    actions: PropTypes.any.isRequired,    
  }

  render () {
    const { itemlist: {items, fields, sorted, sortedRev, sortByField, sortAsc} , dispatch } = this.props;
    const actions = bindActionCreators(ItemsActions, dispatch);
    var data = items; 

    if (sortByField > -1 && sorted[sortByField]) {
      data = sortAsc ? sorted[sortByField] : sortedRev[sortByField];
    } 
    
    return (
      <div className={styles.SortableTableApp}>        
        <LoadFileInput loadFromFile={actions.loadFromFile} />
        <List 
          actions={actions} 
          items={data} 
          fields={fields}
          sortByField={sortByField}
          sortAsc= {sortAsc}          
        />
      </div>
    );
  }
}
