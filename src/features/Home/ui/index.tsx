import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Image from '../assets/image.svg';
import Type from '../assets/type.svg';
import {colors} from '../../../utils/styleguide/colors';

interface HomeProps {
  onGoToTextGenerator(): void;
  onGoToImageGenerator(): void;
}

const Home = ({onGoToTextGenerator, onGoToImageGenerator}: HomeProps) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.card, styles.firstCard]}
      onPress={onGoToTextGenerator}>
      <Image color={colors.white} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Gerador de texto</Text>
        <Text style={styles.cardDescription}>
          Gere textos utilizando a API aberta do chatGPT
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={onGoToImageGenerator}>
      <Type color={colors.white} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Gerador de imagem</Text>
        <Text style={styles.cardDescription}>
          Gere imagens com base no texto desejado utilizando a API aberta do
          DALL-E
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export {Home};
