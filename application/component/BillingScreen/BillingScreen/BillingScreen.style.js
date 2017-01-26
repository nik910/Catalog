import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  detailsMainBody: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  back: {
    height: 60,
    backgroundColor:'#184ca0',
    flexDirection: 'row',
    padding: 10,
  },

  details: {
    flexGrow: 10,
    backgroundColor: '#90b1e5',
    padding: 10,
  },

  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#90b1e5',
    // marginLeft: 10,
  },

  listOfItems: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
    width: 200,
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  }
})
