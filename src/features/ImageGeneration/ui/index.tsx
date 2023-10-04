import React, {ReactElement, useRef} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import Send from '../../../assets/send.svg';
import Mic from '../../../assets/mic.svg';
import typing from '../../../assets/typing.json';
import {Header} from '../../../components/Header';
import {Choice} from '../../../models/choice';
import {Role} from '../../../models/role';

interface MessageStyle {
  container: ViewStyle;
  text: TextStyle;
}

interface ImageGenerationProps {
  chat: Choice[];
  onBack(): void;
  onSendMessage(): void;
  onChangeInput(value: string): void;
  inputValue: string;
  isLoading: boolean;
}

const ImageGeneration = ({
  chat,
  onBack,
  onSendMessage,
  onChangeInput,
  inputValue,
  isLoading,
}: ImageGenerationProps) => {
  const recordIconSize = 22;
  const sendIconSize = 22;

  const flatListRef = useRef<FlatList>(null);

  const renderMessageStyle = (message: Choice): MessageStyle => {
    const isRoleUser = message.message.role === Role.user;

    if (isRoleUser) {
      return {container: styles.userMessage, text: styles.userMessageText};
    }

    return {container: styles.botMessage, text: styles.botMessageText};
  };

  const renderMessage = ({item}: {item: Choice}) => (
    <View style={[styles.message, renderMessageStyle(item).container]}>
      <Text style={renderMessageStyle(item).text}>{item.message.content}</Text>
    </View>
  );

  const separator = (): ReactElement => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Header title="Gerador de imagens" onBack={onBack} />
      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={chat}
        renderItem={renderMessage}
        ItemSeparatorComponent={separator}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
        keyExtractor={(item, index) => String(index)}
      />
      {isLoading && (
        <LottieView source={typing} style={styles.loading} loop autoPlay />
      )}
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputValue}
            style={styles.input}
            onChangeText={value => onChangeInput(value)}
          />
          <TouchableOpacity style={styles.record}>
            <Mic width={recordIconSize} height={recordIconSize} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSendMessage}
            disabled={inputValue.length === 0 || isLoading}
            style={
              (inputValue.length === 0 || isLoading) && styles.disabledButton
            }>
            <Send width={sendIconSize} height={sendIconSize} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {ImageGeneration};
