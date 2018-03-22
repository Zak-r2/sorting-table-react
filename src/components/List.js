import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './List.css';
import ListItem from './ListItem';
import HeaderItem from './HeaderItem';

export default class List extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
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
          this.props.items.map(item => {
            return (<ListItem
              data={item} />);
          })
        }    

      </ul>
    );
  }

}
