import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface UserMessageProps {
  message: string;
}

const UserMessage = ({message}: UserMessageProps) => {
  return (
    <View style={[styles.message, styles.userMessage]}>
      <Text style={styles.userMessageText}>{message}</Text>
    </View>
  );
};

export {UserMessage};
