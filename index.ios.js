import React, { Component } from 'react';
import StockActivity from './application/component/StockActivity'
import {AppRegistry} from 'react-native';

class AwesomeProject extends Component{
  constructor(props){
      super(props);
    }

  render() {
    return(
      <StockActivity />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
