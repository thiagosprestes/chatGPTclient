import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Header} from '../../../components/Header';
import {Role} from '../../../models/role';
import {ImageChat} from '../../../models/Image';
import {Footer} from '../../../components/Footer';
import {MessageList} from '../../../components/MessageList';
import {UserMessage} from '../../../components/UserMessage';
import {BotMessage, MessageType} from '../../../components/BotMessage';
import {TypingIndicator} from '../../../components/TypingIndicator';

interface ImageGenerationProps {
  chat: ImageChat[];
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
  const renderMessage = ({item}: {item: ImageChat}) => {
    if (item.role === Role.user) {
      return <UserMessage message={item.message} />;
    }

    return <BotMessage type={MessageType.image} imageUrl={item.message} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Gerador de imagens" onBack={onBack} />
        <MessageList chat={chat} renderMessage={renderMessage} />
        {isLoading && <TypingIndicator />}
        <Footer
          inputValue={inputValue}
          isLoading={isLoading}
          onChangeInput={onChangeInput}
          onSendMessage={onSendMessage}
        />
      </View>
    </SafeAreaView>
  );
};

export {ImageGeneration};
