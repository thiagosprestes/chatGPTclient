import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/styleguide/colors';
import {
  horizontalScale,
  verticalScale,
} from '../../../utils/styleguide/dimensions';

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
});

export default styles;
