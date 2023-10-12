import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../utils/styleguide/dimensions';

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: horizontalScale(29),
  },
  separator: {marginBottom: verticalScale(18)},
});

export default styles;
