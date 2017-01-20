/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
  CheckBox,
  CheckboxField
} from 'react-native-checkbox';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

export default class AwesomeProject extends Component{

  render(){
    var product = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}];

    return(
      <View style = {styles.mainContainer}>
      <View style = {styles.searchBar}></View>
      <View style = {styles.mainBody}>
      <EntireTable prod = {product}/>
      </View>
      </View>
    );
  }

}

class EntireTable extends Component{
  
  render(){
    var table = [];
    var lastIndex = "";
    var product = this.props.prod;
    console.log(product.length);
    for(var x=0;x<product.length;x++){
      if(product[x].category !== lastIndex){
        table.push(<CategoryProduct prodCategory = {product[x].category}/>);
      }
      var o = {
        a : product[x].name,
        b : product[x].price,
      }
      table.push(<CategoryProperties properties = {o}/>);
      lastIndex = product[x].category;
    }
    console.log(table);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    table = ds.cloneWithRows(table);


    return(
      <View style={{flex: 1}}>
      <ListView
      dataSource = {table}
      renderRow={(rowData) => <View>{rowData}</View>} />
      </View>
    );
  }
}

class CategoryProduct extends Component{
  render(){
    var category = this.props.prodCategory;
    console.log(category);

    return(
      <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'yellow'}}>{category}</Text>
    );
  }
}

class CategoryProperties extends Component{
  render(){
    var name = this.props.properties.a;
    var price = this.props.properties.b;
    console.log(name+" "+price);

    return(
      <View style = {{flexDirection: 'row'}}>
      <Text style = {{fontSize: 15, color: 'white', width: 100}}>{name}</Text>
      <Text style = {{fontSize: 15, color: 'white'}}>{price}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'black',
  },
  mainBody:{
    flexGrow:10,
    backgroundColor: 'black',
    flexDirection: 'row',
    // marginTop: 10,
    // marginLeft: 10,
  },
  searchBar:{
    flexGrow:2.5,
    backgroundColor:'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textStyle: {
    height: 30,
    marginTop: 30,
    marginLeft: 10,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
