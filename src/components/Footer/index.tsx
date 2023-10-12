import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Send from '../../assets/send.svg';
import Mic from '../../assets/mic.svg';

interface FooterProps {
  inputValue: string;
  onChangeInput(value: string): void;
  onSendMessage(): void;
  isLoading: boolean;
}

const Footer = ({
  inputValue,
  onChangeInput,
  onSendMessage,
  isLoading,
}: FooterProps) => {
  const iconSize = 22;

  return (
    <View style={styles.footer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          style={styles.input}
          onChangeText={value => onChangeInput(value)}
        />
        <TouchableOpacity style={styles.record}>
          <Mic width={iconSize} height={iconSize} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSendMessage}
          disabled={inputValue.length === 0 || isLoading}
          style={
            (inputValue.length === 0 || isLoading) && styles.disabledButton
          }>
          <Send width={iconSize} height={iconSize} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Footer};
