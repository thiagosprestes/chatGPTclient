import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styleguide/colors';
import {horizontalScale} from '../../utils/styleguide/dimensions';

const styles = StyleSheet.create({
  footer: {
    padding: horizontalScale(20),
    borderColor: colors.lightGray,
    borderTopWidth: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGray,
    paddingVertical: 0,
    paddingHorizontal: horizontalScale(10),
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    color: colors.darkGray,
    fontFamily: 'NunitoRegular',
  },
  record: {marginRight: horizontalScale(5)},
  disabledButton: {
    opacity: 0.5,
  },
  separator: {marginBottom: 18},
});

export default styles;
