import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/sizes';

export default StyleSheet.create({
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP('2'),
    marginTop: heightPercentageToDP('1'),
  },
  listContainer: {
    paddingTop: heightPercentageToDP('2'),
    paddingVertical: heightPercentageToDP('6'),
    marginHorizontal: widthPercentageToDP('2'),
  }
});
