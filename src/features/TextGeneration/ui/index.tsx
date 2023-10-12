import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Header} from '../../../components/Header';
import {Choice} from '../../../models/choice';
import {Role} from '../../../models/role';
import {Footer} from '../../../components/Footer';
import {MessageList} from '../../../components/MessageList';
import {UserMessage} from '../../../components/UserMessage';
import {BotMessage, MessageType} from '../../../components/BotMessage';
import {TypingIndicator} from '../../../components/TypingIndicator';

interface TextGenerationProps {
  chat: Choice[];
  onBack(): void;
  onSendMessage(): void;
  onChangeInput(value: string): void;
  inputValue: string;
  isLoading: boolean;
}

const TextGeneration = ({
  chat,
  onBack,
  onSendMessage,
  onChangeInput,
  inputValue,
  isLoading,
}: TextGenerationProps) => {
  const renderMessage = ({item}: {item: Choice}) => {
    if (item.message.role === Role.user) {
      return <UserMessage message={item.message.content} />;
    }

    return (
      <BotMessage type={MessageType.text} message={item.message.content} />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Gerador de texto" onBack={onBack} />
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

export {TextGeneration};
