import React from 'react';
import {Home} from './ui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes, RoutesParams} from '../../navigation/routes';

type HomeProps = NativeStackScreenProps<RoutesParams, 'Home'>;

const HomeScreen = ({navigation}: HomeProps) => {
  const handleOnGoToTextGenerator = () => {
    navigation.navigate(Routes.TextGeneration);
  };

  const handleOnGoToImageGenerator = () => {
    navigation.navigate(Routes.ImageGeneration);
  };

  return (
    <Home
      onGoToTextGenerator={handleOnGoToTextGenerator}
      onGoToImageGenerator={handleOnGoToImageGenerator}
    />
  );
};

export {HomeScreen};
