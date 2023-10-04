import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/styleguide/dimensions';
import {colors} from '../../utils/styleguide/colors';

const styles = StyleSheet.create({
  header: {
    padding: horizontalScale(14),
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.primaryBlue,
    marginLeft: horizontalScale(5),
    fontSize: 20,
    fontFamily: 'NunitoBold',
  },
});

export default styles;
