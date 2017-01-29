import React from 'react';
import {Text, View} from 'react-native';
import styles from './BillingScreenView.style';
import TouchableImage from '../../../Wrappers/TouchableImage'

export default class BillingScreenView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    if(id>=0){
      return(
        <View style = {styles.productDetails}>
          <Text style = {styles.name}>{name}</Text>
          <Text style = {styles.price}>{price}</Text>
          <TouchableImage style={styles.deleteButton} source = {require('../../../assets/images/trash.png')} onPress = {() => this.props.deleteItem(id)}/>
        </View>
      );
    }

    else if(id===-2){
      return(
        <View style = {styles.productDetails}>
          <Text style = {styles.name}>{name}</Text>
          <Text style = {styles.price}>{price}</Text>
        </View>
      );
    }

    else{
      return(
        <View style = {styles.productDetails}>
          <Text style = {styles.headerName}>{name}</Text>
          <Text style = {styles.headerPrice}>{price}</Text>
        </View>
      );
    }
  }
}
