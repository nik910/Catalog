import React from 'react';
import {ListView, StyleSheet, View, Text} from 'react-native';
import CategoryProduct from './CategoryProduct';
import PropertiesProduct from './PropertiesProduct';

export default class StockListView extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }


  render(){

    let table = [];
    let product = this.props.prod;
    let productCategory = [];

    for(let x=0;x<product.length;x++){
      productCategory[product[x].category] = false;
    }

    if(this.props.searchText !== ""){
      let re = new RegExp("\w*" + this.props.searchText.toLowerCase() + "\w*");
      for(let x=0;x<product.length;x++){
        if(this.props.inStock === true && product[x].stocked === false)
          continue;

        if((product[x].name.toLowerCase()).match(re)){
          let o = {
            a : product[x].name,
            b : product[x].price,
            c : product[x].stocked,
          }
          if(productCategory[product[x].category]===false){
            table.push(<CategoryProduct prodCategory = {product[x].category}/>);
            productCategory[product[x].category] = true;
          }
          table.push(<PropertiesProduct properties = {o}/>);
        }
      }
    }

    else{
      table = screen(this);
    }


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    table = ds.cloneWithRows(table);

    return(
      <View style = {styles.mainBody}>
      <ListView
        dataSource = {table}
        renderRow={(rowData) => <View>{rowData}</View>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBody:{
    flexGrow:1,
    backgroundColor: '#90b1e5',
    flexDirection: 'row',
    height: 150,
  },
})

const screen = (that) => {

  let table = [];
  let lastIndex = "";
  let product = that.props.prod;

  console.log(that.props.inStock);
  console.log(product.length);
  for(let x=0;x<product.length;x++){

    if(that.props.inStock === true && product[x].stocked === false)
      continue;

    if(product[x].category !== lastIndex){
      table.push(<CategoryProduct prodCategory = {product[x].category}/>);
    }
    let o = {
      a : product[x].name,
      b : product[x].price,
      c : product[x].stocked,
    }

    table.push(<PropertiesProduct properties = {o}/>);


    lastIndex = product[x].category;
  }

  return table;
}
