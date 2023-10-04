import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Back from '../../assets/back.svg';
import styles from './styles';

interface HeaderProps {
  title: string;
  onBack(): void;
}

const Header = ({title, onBack}: HeaderProps) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBack}>
      <Back />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export {Header};
