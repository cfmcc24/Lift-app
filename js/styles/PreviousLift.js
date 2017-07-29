import { StyleSheet } from 'react-native';

const PreviousLiftStyles = StyleSheet.create({ 
  title: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold'
  },
  date: {
    textAlign: 'right',
    fontSize: 20
  },
  outerContainer: {
    flex: 1, 
    flexDirection: 'column', 
    paddingTop: 25
  },
  contentContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default PreviousLiftStyles;
