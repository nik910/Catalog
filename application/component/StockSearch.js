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
          onChangeText = {(text) => this.handleSearchText(text)}/>
        <CheckBox style = {styles.checkbox}
          label= 'Show items in stock'
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
    // flexGrow:2,
    height: 80,
    backgroundColor:'white',
  },

  searchText:{
    height: 40,
  },

  checkbox:{
    height: 20,
  },
})
