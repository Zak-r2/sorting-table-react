import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './ListItem.css';

export default class HeaderItem extends Component {
  static propTypes = {
    sortingFieldIndex: PropTypes.number.isRequired,
    sortDirectionAsc: PropTypes.boolean,
    fields: PropTypes.array,
    onFieldClick: PropTypes.func.isRequired
  }

  render () {
    const { fields, sortByField, sortAsc, onFieldClick} = this.props;
    return (
      <li className={styles.listItem}>
        {
          fields.map((field, index) => {
            return (<span
              key={field}
              onClick={() => onFieldClick(index)} >
              {field}
              {index === sortByField && (
                <span>{sortAsc ? (<b>&uarr;</b>) : (<b>&darr; </b>)}</span>
              )}
              </span> );
          })
        }        
      </li>
    );
  }

}
