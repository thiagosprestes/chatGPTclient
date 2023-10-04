import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Back from '../../assets/back.svg';
import styles from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => (
  <View style={styles.header}>
    <TouchableOpacity>
      <Back />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export {Header};
