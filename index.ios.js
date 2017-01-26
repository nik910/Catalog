import React, { Component } from 'react';
import RouterPage from './application/component/RouterPage'
import {AppRegistry} from 'react-native';

class AwesomeProject extends Component{
  constructor(props){
      super(props);
    }

  render() {
    return(
      <RouterPage/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
