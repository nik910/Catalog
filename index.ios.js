/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import CheckBox from 'react-native-checkbox';

import React, { Component } from 'react';
import StockActivity from './application/component/StockActivity'

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';


class AwesomeProject extends Component{
  constructor(props){
      super(props);
    }

    render() {
      return(
        <StockActivity />
      )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
//   constructor(props){
//     super(props);
//     this.state = {text:"", isChecked:false};
//   }
//
//   changeStateCheckBox = () => {
//     this.setState(prevState => ({
//       isChecked: !prevState.isChecked
//     }));
//   }
//
//   render() {
//
//     console.log('checkbox', CheckBox)
//     return(
//       <View style = {styles.mainContainer}>
//       <View style = {styles.searchBar}>
//         <TextInput style = {{height: 40}}
//           placeholder = "Search"
//           onChangeText = {(ans) => this.setState({text:ans})}/>
//           <CheckBox style = {{height: 20}}
//             label= 'Show items in stock'
//             checked={this.state.isChecked}
//             onChange={this.changeStateCheckBox}
//           />
//       </View>
//         <View style = {styles.mainBody}>
//           <EntireTable prod = {product} stateCheckBox = {this.state.isChecked}/>
//         </View>
//       </View>
//     );
//   }
// }
//
// class EntireTable extends Component{s
//
//   render() {
//     var table = [];
//     var lastIndex = "";
//     var product = this.props.prod;
//     console.log(this.props.stateCheckBox);
//     console.log(product.length);
//     for(var x=0;x<product.length;x++){
//
//       if(this.props.stateCheckBox === true && product[x].stocked === false)
//         continue;
//
//       if(product[x].category !== lastIndex){
//         table.push(<CategoryProduct prodCategory = {product[x].category}/>);
//       }
//       var o = {
//         a : product[x].name,
//         b : product[x].price,
//         c : product[x].stocked,
//       }
//
//       table.push(<CategoryProperties properties = {o}/>);
//
//
//       lastIndex = product[x].category;
//     }
//     console.log(table);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     table = ds.cloneWithRows(table);
//
//
//     return(
//       <View style={{flex: 1}}>
//       <ListView
//       dataSource = {table}
//       renderRow={(rowData) => <View>{rowData}</View>} />
//       </View>
//     );
//   }
// }
//
// class CategoryProduct extends Component{
//   render(){
//     var category = this.props.prodCategory;
//     console.log(category);
//
//     return(
//       <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'yellow'}}>{category}</Text>
//     );
//   }
// }
//
// class CategoryProperties extends Component{
//   render(){
//
//     const name = this.props.properties.a;
//     const price = this.props.properties.b;
//
//     if(this.props.properties.c === true){
//       return(
//         <View style = {{flexDirection: 'row'}}>
//         <Text style = {{fontSize: 15, color: 'white', width: 100}}>{name}</Text>
//         <Text style = {{fontSize: 15, color: 'white'}}>{price}</Text>
//         </View>
//       );
//     }
//
//     else{
//       return(
//         <View style = {{flexDirection: 'row'}}>
//         <Text style = {{fontSize: 15, color: 'red', width: 100}}>{name}</Text>
//         <Text style = {{fontSize: 15, color: 'white'}}>{price}</Text>
//         </View>
//       );
//     }
//   }
// }
//
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     // backgroundColor: 'black',
//   },
//   mainBody:{
//     flexGrow:10,
//     backgroundColor: 'black',
//     flexDirection: 'row',
//     // marginTop: 10,
//     // marginLeft: 10,
//   },
//   searchBar:{
//     marginTop: 20,
//     marginLeft: 10,
//     flexGrow:2,
//     backgroundColor:'white',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   textStyle: {
//     height: 30,
//     marginTop: 30,
//     marginLeft: 10,
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
