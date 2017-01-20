import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class CategoryProduct extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var category = this.props.prodCategory;
    console.log(category);

    return(
      <Text style = {style.category}>{category}</Text>
    );
  }
}

const style = StyleSheet.create({
  category:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
  },
})
