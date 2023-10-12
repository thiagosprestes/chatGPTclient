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
    padding: horizontalScale(29),
  },
  card: {
    backgroundColor: colors.primaryBlue,
    padding: horizontalScale(14),
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'NunitoBold',
  },
  cardInfo: {
    marginLeft: horizontalScale(10),
    flex: 1,
  },
  cardDescription: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'NunitoRegular',
  },
  firstCard: {
    marginBottom: verticalScale(12),
  },
});

export default styles;
