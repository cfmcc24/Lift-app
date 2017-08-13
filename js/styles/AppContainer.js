import { StyleSheet } from 'react-native';

const AppContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  recentLift: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  contentContainer: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
  },
  liftsList: {
    flex: 3,
    backgroundColor: 'skyblue',
  },
});

export default AppContainerStyles;
