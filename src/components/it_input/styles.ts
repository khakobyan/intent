import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from '../../helpers/sizes';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: widthPercentageToDP('2'),
    paddingHorizontal: widthPercentageToDP('2'),
    height: widthPercentageToDP('10'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  input: {
    height: '100%',
    width: widthPercentageToDP('70'),
    marginRight: widthPercentageToDP('2'),
  }
});
