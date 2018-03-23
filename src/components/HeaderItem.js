import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './ListItem.css';

export default class HeaderItem extends Component {
  static propTypes = {
    sortByField: PropTypes.number.isRequired,
    sortAsc: PropTypes.boolean,
    fields: PropTypes.array,
    onFieldClick: PropTypes.func.isRequired
  }

  render () {
    const { fields, sortByField, sortAsc, onFieldClick} = this.props;
    return (
      <li className={styles.listHeaderItem}>
        {
          fields.map((field, index) => {
            return (<span
              className={styles.listField}
              key={field}
              onClick={() => onFieldClick(index)} >
              {field}
              {index === sortByField && (
                <i>{sortAsc ? (<b>&uarr;</b>) : (<b>&darr; </b>)}</i>
              )}
              </span> );
          })
        }        
      </li>
    );
  }

}
