import React from 'react';
import {ListView, View, Text} from 'react-native';
import CategoryProduct from '../CategoryProduct';
import PropertiesProduct from '../PropertiesProduct';
import styles from './StockListView.style';

export default class StockListView extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      checkedItems: [],
    }
  }

  render(){

    let table = this.computeStockListView();
    console.log(this.state.table);

    return(
      <View style = {styles.mainBody}>
      <ListView
        dataSource={table}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}/>
      </View>
    );
  }

  renderRow = (productDetails) => {
    return(
      <View><PropertiesProduct properties = {productDetails} handleCheckedItems={this.handleCheckedItems}/></View>
    );
  }

  renderSectionHeader = (sectionData, category) => {
      return(
        <View style = {styles.category}><CategoryProduct prodCategory = {category}/></View>
      )
  }

  searchScreen = () => {
    let table = [];
    let product = this.props.prod;

    let re = new RegExp("\w*" + this.props.searchText.toLowerCase() + "\w*");
    for(let x=0;x<product.length;x++){
      if(this.props.inStock === true && product[x].stocked === false){
        continue;
      }

      if((product[x].name.toLowerCase()).match(re)){
        if(!table[product[x].category]){
          table[product[x].category] = [];
        }

        let properties = {
          name: product[x].name,
          price: product[x].price,
          stocked: product[x].stocked,
          category: product[x].category,
          id: x,
        }

        table[product[x].category].push(properties);
      }

    }

    return table;

  }

  screen = () => {
    let table = [];
    let product = this.props.prod;

    for(let x=0;x<product.length;x++){
      if(this.props.inStock === true && product[x].stocked === false){
        continue;
      }

      if(!table[product[x].category]){
        table[product[x].category] = [];
      }

      let properties = {
        name: product[x].name,
        price: product[x].price,
        stocked: product[x].stocked,
        category: product[x].category,
        id: x,
      }

      table[product[x].category].push(properties);
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

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    return ds.cloneWithRowsAndSections(table);
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
    console.log(id);
    if(this.state.checkedItems.indexOf(id)>=0){
      let index = this.state.checkedItems.indexOf(id);
      console.log(index);
      let newArr = this.remove(this.state.checkedItems, index);
      this.setState({
        checkedItems: newArr,
      }, () => {
        console.log(this.state.checkedItems);
        this.props.listOfItemsToBuy(this.state.checkedItems);
      });
    }

    else{
      this.setState({
        checkedItems: this.state.checkedItems.concat(id),
      }, () => {
        console.log(this.state.checkedItems);
        this.props.listOfItemsToBuy(this.state.checkedItems);
      });
    }
  }

}
