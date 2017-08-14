import { StyleSheet } from 'react-native';

const PreviousLiftStyles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: 'row',
  },
  setsNumber: {
    fontSize: 24,
    color: '#FF2D55',
  },
  setsText: {
    fontSize: 12,
  },
  of: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
  },
  date: {
    textAlign: 'right',
    fontSize: 20,
  },
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 25,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PreviousLiftStyles;
