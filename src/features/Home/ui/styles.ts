import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/styleguide/colors';
import {
  horizontalScale,
  verticalScale,
} from '../../../utils/styleguide/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: horizontalScale(29),
  },
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
  message: {
    padding: horizontalScale(22),
    borderRadius: 25,
    maxWidth: horizontalScale(250),
    marginBottom: verticalScale(25),
  },
  userMessage: {
    backgroundColor: colors.primaryBlue,
    borderTopRightRadius: 0,
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: colors.backgroundGrey,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
  },
  userMessageText: {
    color: colors.white,
    fontFamily: 'NunitoRegular',
  },
  botMessageText: {
    color: colors.darkGray,
    fontFamily: 'NunitoRegular',
  },
});

export default styles;
