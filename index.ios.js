import React, { Component } from 'react';
import MainApp from './application/component/MainApp'
import {AppRegistry} from 'react-native';

class AwesomeProject extends Component{
  constructor(props){
      super(props);
    }

  render() {
    return(
      <MainApp/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
