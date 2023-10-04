import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>ChatGPT</Text>
      </View>
    </View>
  );
};

export {Home};
