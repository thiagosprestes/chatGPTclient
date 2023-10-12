import React from 'react';
import LottieView from 'lottie-react-native';

import styles from './styles';
import typing from '../../assets/typing.json';

const TypingIndicator = () => {
  return <LottieView source={typing} style={styles.typing} loop autoPlay />;
};

export {TypingIndicator};
