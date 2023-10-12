import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

enum MessageType {
  image = 'image',
  text = 'text',
}

interface BotMessageProps {
  type: MessageType;
  imageUrl?: string;
  message?: string;
}

const BotMessage = ({imageUrl, message, type}: BotMessageProps) => {
  if (type === MessageType.text) {
    return (
      <View style={[styles.message, styles.botMessage]}>
        <Text style={styles.botMessageText}>{message}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.message, styles.botMessage]}>
      <Image
        source={{uri: imageUrl}}
        width={200}
        height={200}
        resizeMode="contain"
      />
    </View>
  );
};

export {BotMessage, MessageType};
