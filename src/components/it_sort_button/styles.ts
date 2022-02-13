import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from '../../helpers/sizes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP('10'),
    backgroundColor: '#ded1af',
    borderRadius: widthPercentageToDP('2'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
