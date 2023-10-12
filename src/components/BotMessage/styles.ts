import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/styleguide/dimensions';
import {colors} from '../../utils/styleguide/colors';

const styles = StyleSheet.create({
  message: {
    borderRadius: 25,
    padding: horizontalScale(22),
    maxWidth: horizontalScale(250),
  },
  botMessage: {
    backgroundColor: colors.backgroundGrey,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
  },
  botMessageText: {
    color: colors.darkGray,
    fontFamily: 'NunitoRegular',
  },
});

export default styles;
