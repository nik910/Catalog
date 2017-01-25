import React, { Component } from 'react';
import StockActivity from './StockActivity';
import ProductDetails from './ProductDetails';
import BillingScreen from './BillingScreen'
import {Router, Scene} from 'react-native-router-flux';

export default class MainApp extends Component{
  constructor(props){
      super(props);
    }

  render() {
    return (
      <Router>
        <Scene key = "root">
          <Scene key = "stockActivity" initial component = {StockActivity} hideNavBar/>
          <Scene key = "productDetails" component = {ProductDetails} hideNavBar/>
          <Scene key = "billingScreen" component = {BillingScreen} hideNavBar/>
        </Scene>
      </Router>
  );

  }
}
