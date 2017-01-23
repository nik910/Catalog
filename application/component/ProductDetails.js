import React, { Component, PropTypes } from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ProductDetails extends Component{
  constructor(props){
    super(props);
  }

  render(){
    // console.log(this.props.name);
    return(
      <View style = {styles.detailsMainBody}>
        <View style = {styles.back}>
          <Button
            color = "#ed6565"
            title = "Go Back"
            onPress = {() => Actions.stockActivity()}
          />
        </View>
        <View style = {styles.details}>
          <Text>{this.props.category}</Text>
          <Text>{this.props.name}</Text>
          <Text>{this.props.price}</Text>
        </View>
      </View>
    )
  }
}

// ProductDetails.propTypes = {
//   name: PropTypes.string
// }

const styles = StyleSheet.create({
  detailsMainBody: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  back: {
    height: 50,
    backgroundColor:'#184ca0',
    flexDirection: 'row',
    padding: 10,
  },

  details: {
    flexGrow: 10,
    backgroundColor: '#90b1e5',
    padding: 10,
  }

})
