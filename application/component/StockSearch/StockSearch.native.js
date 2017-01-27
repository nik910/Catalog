import React from 'react';
import {View, TextInput} from 'react-native';
import CheckBox from 'react-native-checkbox';
import styles from './StockSearch.style.js'

export default class StockSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isChecked: false,
    }
  }

  render() {
    return(
      <View style = {styles.searchBar}>
        <TextInput style = {styles.searchText}
          autoCapitalize = "none"
          underlineColorAndroid='transparent'
          placeholder = "Search"
          placeholderTextColor = 'black'
          onChangeText = {(text) => this.handleSearchText(text)}/>
        <CheckBox style = {styles.checkbox}
          label= 'Show items in stock'
          labelStyle = {{color: 'black'}}
          checked={this.state.isChecked}
          underlayColor="transparent"
          onChange={() => this.handleCheckBox()}
        />
      </View>
    );
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
    }, () => {
      this.props.handleSearchText(text);
    });

  }
}
