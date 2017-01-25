import React from 'react';
import {ListView, StyleSheet, View, Text} from 'react-native';
import CategoryProduct from './CategoryProduct';
import PropertiesProduct from './PropertiesProduct';

export default class StockListView extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      checkedItems: [],
    }
  }

  render(){

    let table = this.computeStockListView();

    return(
      <View style = {styles.mainBody}>
      <ListView
        dataSource = {table}
        renderRow={(rowData) => <View>{rowData}</View>} />
      </View>
    );
  }

  searchScreen = () => {
    let table = [];
    let productCategory = [];
    let product = this.props.prod;

    for(let x=0;x<product.length;x++){
      productCategory[product[x].category] = false;
    }

    let re = new RegExp("\w*" + this.props.searchText.toLowerCase() + "\w*");
    for(let x=0;x<product.length;x++){
      if(this.props.inStock === true && product[x].stocked === false)
        continue;

      if((product[x].name.toLowerCase()).match(re)){
        let productDetails = {
          id: x,
          category : product[x].category,
          name : product[x].name,
          price : product[x].price,
          stocked : product[x].stocked,
        }
        if(productCategory[product[x].category]===false){
          table.push(<CategoryProduct prodCategory = {product[x].category}/>);
          productCategory[product[x].category] = true;
        }
        table.push(<PropertiesProduct properties = {productDetails} handleCheckedItems={this.handleCheckedItems}/>);
      }
    }

    return table;

  }

  screen = () => {

    let table = [];
    let lastIndex = "";
    let product = this.props.prod;

    console.log(this.props.inStock);
    console.log(product.length);
    for(let x=0;x<product.length;x++){

      if(this.props.inStock === true && product[x].stocked === false)
        continue;

      if(product[x].category !== lastIndex){
        table.push(<CategoryProduct prodCategory = {product[x].category}/>);
      }
      let productDetails = {
        id: x,
        category : product[x].category,
        name : product[x].name,
        price : product[x].price,
        stocked : product[x].stocked,
      }
      table.push(<PropertiesProduct properties = {productDetails} handleCheckedItems={this.handleCheckedItems}/>);


      lastIndex = product[x].category;
    }

    return table;
  }

  computeStockListView = () => {
    let table = [];

    if(this.props.searchText !== ""){
      table = this.searchScreen();
    }

    else{
      table = this.screen();
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(table);
  }

  remove = (oldArr, index) => {
    let newArr = [];
    for(let x=0;x<oldArr.length;x++){
      if(x===index)
        continue;

      newArr.push(oldArr[x]);
    }

    return newArr;
  }

  handleCheckedItems = (id) => {
    if(this.state.checkedItems.indexOf(id)>=0){
      let index = this.state.checkedItems.indexOf(id);
      console.log(index);
      let newArr = this.remove(this.state.checkedItems, index);
      this.setState({
        checkedItems: newArr,
      }, () => {
        this.props.listOfItemsToBuy(this.state.checkedItems);
      });
    }

    else{
      this.setState({
        checkedItems: this.state.checkedItems.concat(id),
      }, () => {
        this.props.listOfItemsToBuy(this.state.checkedItems);
      });
    }
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
