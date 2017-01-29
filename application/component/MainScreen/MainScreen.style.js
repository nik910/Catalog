import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    flexDirection: 'column',
  },

  buttons: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#184ca0',
  },

  buttonAddToCart: {
    flexGrow: 1,
  },

  buttonCheckOut: {
    flexGrow: 1,
  },

  buyButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ed6565',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  
})
