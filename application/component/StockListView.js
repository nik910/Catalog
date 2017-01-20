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

    var table = [];
    var lastIndex = "";
    var product = this.props.prod;
    console.log(this.props.inStock);
    console.log(product.length);
    for(var x=0;x<product.length;x++){

      if(this.props.inStock === true && product[x].stocked === false)
        continue;

      if(product[x].category !== lastIndex){
        table.push(<CategoryProduct prodCategory = {product[x].category}/>);
      }
      var o = {
        a : product[x].name,
        b : product[x].price,
        c : product[x].stocked,
      }

      table.push(<PropertiesProduct properties = {o}/>);


      lastIndex = product[x].category;
    }
    console.log(table);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    table = ds.cloneWithRows(table);

    return(
      <View style = {styles.mainBody}>
      <ListView
        dataSource = {table}
        renderRow={(rowData) => <View>{rowData}</View>} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainBody:{
    flexGrow:10,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
})
