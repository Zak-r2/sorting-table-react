import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './ListItem.css';

export default class ListItem extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render () {
    return (
      <li className={styles.listItem}>
        {
          this.props.data.map(paramValue => {
            return (<span>{paramValue}</span> );
          })
        }        
      </li>
    );
  }
}
