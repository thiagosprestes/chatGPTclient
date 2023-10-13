import React, {useState} from 'react';
import {Alert} from 'react-native';
import {TextGeneration} from './ui';
import {Choice} from '../../models/choice';
import {Role} from '../../models/role';
import {useMutation} from 'react-query';
import {postCompletions} from '../../services/endpoints';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RoutesParams} from '../../navigation/routes';

type TextGenerationScreenProps = NativeStackScreenProps<
  RoutesParams,
  'TextGeneration'
>;

interface OnCreateChatMessageProps {
  role: Role;
  content: string;
}

const TextGenerationScreen = ({navigation}: TextGenerationScreenProps) => {
  const [chat, setChat] = useState<Choice[]>([]);
  const [input, setInput] = useState('');

  const onCreateChatMessage = ({role, content}: OnCreateChatMessageProps) =>
    setChat(oldValue => [
      ...oldValue,
      {
        message: {
          role,
          content,
        },
      },
    ]);

  const {mutate, isLoading} = useMutation(postCompletions, {
    onMutate: () =>
      onCreateChatMessage({
        role: Role.user,
        content: input,
      }),
    onSuccess: ({data}) =>
      onCreateChatMessage({
        role: Role.assistant,
        content: data.choices[0].message.content,
      }),
    onError: error => {
      console.log('there was an error', error);
      Alert.alert('Erro desconhecido', 'Ocorreu um erro desconhecido :(');
    },
  });

  const handleOnSendMessage = () => {
    mutate(input);
    setInput('');
  };

  const handleOnChangeInput = (value: string) => setInput(value);

  const handleOnBack = () => navigation.goBack();

  return (
    <TextGeneration
      chat={chat}
      onSendMessage={handleOnSendMessage}
      onChangeInput={handleOnChangeInput}
      inputValue={input}
      isLoading={isLoading}
      onBack={handleOnBack}
    />
  );
};

export {TextGenerationScreen};
