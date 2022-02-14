import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/sizes';

export default StyleSheet.create({
  container: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f0',
    borderWidth: 2,
    borderColor: '#6e6f70',
    borderRadius: widthPercentageToDP('2'),
    marginVertical: heightPercentageToDP('1'),
    paddingHorizontal: widthPercentageToDP('1'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    width: widthPercentageToDP('70'),
  },
  linkContainer: {
    alignItems: 'center',
  },
  linkTitle: {
    color: '#2051ab',
  }
});
