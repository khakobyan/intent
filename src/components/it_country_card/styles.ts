import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/sizes';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f0',
    borderRadius: widthPercentageToDP('5'),
    width: widthPercentageToDP('38'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: widthPercentageToDP('45'),
    marginVertical: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('6'),
    paddingVertical: heightPercentageToDP('2'),
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
