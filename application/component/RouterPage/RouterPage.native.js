import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MainScreen from '../MainScreen';
import ProductDetails from '../ProductDetails';
import BillingScreen from '../BillingScreen/BillingScreen'

export default class RouterPage extends Component{
  constructor(props){
      super(props);
    }

  render() {
    return (
      <Router>
        <Scene key = "root">
          <Scene key = "mainScreen" initial component = {MainScreen} hideNavBar/>
          <Scene key = "productDetails" component = {ProductDetails} hideNavBar/>
          <Scene key = "billingScreen" component = {BillingScreen} hideNavBar/>
        </Scene>
      </Router>
  );

  }
}
