import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './List.css';
import ListItem from './ListItem';
import HeaderItem from './HeaderItem';

export default class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    fields: PropTypes.array.isRequired,
    actions: PropTypes.any.isRequired,
    sortByField: PropTypes.number.isRequired,
    sortAsc: PropTypes.boolean
  }

  render () {
    const { items, fields, sortByField, sortAsc, actions } = this.props;

    return (
      <ul className={styles.list}>
        <HeaderItem 
          fields={fields} 
          sortByField={sortByField} 
          sortAsc= {sortAsc}
          onFieldClick={actions.sortByField}
        />        
        {
          items.map(item => (<ListItem data={item} />))          
        }
      </ul>
    );
  }

}
