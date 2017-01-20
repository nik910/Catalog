import React from 'react';
import {ListView, StyleSheet, View, Text} from 'react-native';

export default class PropertiesProduct extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const name = this.props.properties.a;
    const price = this.props.properties.b;

    if(this.props.properties.c === true){
      return(
        <View style = {{flexDirection: 'row'}}>
        <Text style = {{fontSize: 15, color: 'white', width: 100}}>{name}</Text>
        <Text style = {{fontSize: 15, color: 'white'}}>{price}</Text>
        </View>
      );
    }

    else{
      return(
        <View style = {{flexDirection: 'row'}}>
        <Text style = {{fontSize: 15, color: 'red', width: 100}}>{name}</Text>
        <Text style = {{fontSize: 15, color: 'white'}}>{price}</Text>
        </View>
      );
    }
  }
}
