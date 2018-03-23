import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './LoadFileInput.css';

export default class LoadFileInput extends Component {
  static propTypes = {
    loadFromFile: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  errorHandler() {
    console.log('somethigng goes wrong, sorry :(');  
  }

  handleFileChange(selectorFiles: FileList) {
      let reader = new FileReader();
      this.props.loadFromFile('');
      reader.onload = e => this.props.loadFromFile(e.target.result);
      reader.onerror = this.errorHandler;
      reader.readAsText(selectorFiles[0]);          
  }  

  render () {
    return window.FileReader ? (
        <input type="file" onChange={ (e) => this.handleFileChange(e.target.files) } />
      ) : (
        <span>Your browser doesn't support FileReader function</span>
      );
  }
}
