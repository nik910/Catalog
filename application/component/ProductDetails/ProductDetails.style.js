import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
  detailsMainBody: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  back: {
    ...Platform.select({
      ios: {
        height: 60,
      },
      android: {
        height: 65,
      }
    }),
    backgroundColor:'#184ca0',
    flexDirection: 'row',
    padding: 10,
  },

  details: {
    alignItems: 'center',
    flexGrow: 10,
    backgroundColor: '#ccdfff',
    padding: 10,
  },

  backButton:{
    padding: 10,
    width: 40,
    height: 50,
  },

  category: {
    fontWeight: 'bold',
    fontSize: 35,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  price: {
    fontWeight: 'bold',
    fontSize: 15,
  },

})
