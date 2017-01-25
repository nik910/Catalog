import React, { Component, PropTypes } from 'react';
import {Text, StyleSheet, View, Button, TouchableHighlight, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ProductDetails extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style = {styles.detailsMainBody}>
        {this.renderBackButton()}
        {this.renderItemDetails()}
      </View>
    )
  }

  renderBackButton = () => {
    return(
      <View style = {styles.back}>
        <TouchableHighlight onPress = {() => Actions.pop()}>
          <Image
            style = {{padding: 10, width: 40, height: 50}}
            source = {require('../assets/images/go_back-ileadstar.com_.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }

  renderItemDetails = () => {
    return(
      <View style = {styles.details}>
        <Text style = {{fontWeight: 'bold', fontSize: 35}}>{this.props.category}</Text>
        <Text style = {{fontWeight: 'bold', fontSize: 25}}>{this.props.name}</Text>
        <Text style = {{fontWeight: 'bold', fontSize: 15}}>{this.props.price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsMainBody: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  back: {
    height: 60,
    backgroundColor:'#184ca0',
    flexDirection: 'row',
    padding: 10,
  },

  details: {
    alignItems: 'center',
    flexGrow: 10,
    backgroundColor: '#90b1e5',
    padding: 10,
  }

})
