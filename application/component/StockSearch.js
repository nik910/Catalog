import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class StockSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isChecked: false,
    }
  }

  handleCheckBox = () => {
    this.setState({
      isChecked: !this.state.isChecked
    }, () => {
      this.props.onCheckboxChange(this.state.isChecked);
    });
  }

  handleSearchText = (text) => {
    this.setState({
      text: text,
    });
    this.props.handleSearchText(text);
  }

  render() {
    return(
      <View style = {styles.searchBar}>
        <TextInput style = {styles.searchText}
          placeholder = "Search"
          placeholderTextColor = 'black'
          onChangeText = {(text) => this.handleSearchText(text)}/>
        <CheckBox style = {styles.checkbox}
          label= 'Show items in stock'
          labelStyle = {{color: 'black'}}
          checked={this.state.isChecked}
          onChange={() => this.handleCheckBox()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar:{
    marginTop: 20,
    marginLeft: 10,
    height: 80,
    backgroundColor:'#184ca0',


  },

  searchText:{
    padding: 5,
    height: 40,
    color: 'white',
  },

  checkbox:{
    height: 20,
    color: 'white',
  },
})
