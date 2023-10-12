import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/styleguide/dimensions';
import {colors} from '../../utils/styleguide/colors';

const styles = StyleSheet.create({
  message: {
    borderRadius: 25,
    padding: horizontalScale(22),
    maxWidth: horizontalScale(250),
  },
  userMessage: {
    backgroundColor: colors.primaryBlue,
    borderTopRightRadius: 0,
    alignSelf: 'flex-end',
  },
  userMessageText: {
    color: colors.white,
    fontFamily: 'NunitoRegular',
  },
});

export default styles;
