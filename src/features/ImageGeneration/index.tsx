import React, {useState} from 'react';
import {Alert} from 'react-native';
import {ImageGeneration} from './ui';
import {Role} from '../../models/role';
import {useMutation} from 'react-query';
import {postGenerations} from '../../services/endpoints';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RoutesParams} from '../../navigation/routes';
import {ImageChat} from '../../models/Image';

type ImageGenerationScreenProps = NativeStackScreenProps<
  RoutesParams,
  'ImageGeneration'
>;

interface OnCreateChatMessageProps {
  role: Role;
  message: string;
}

const ImageGenerationScreen = ({navigation}: ImageGenerationScreenProps) => {
  const [chat, setChat] = useState<ImageChat[]>([]);
  const [input, setInput] = useState('');

  const onCreateChatMessage = ({role, message}: OnCreateChatMessageProps) =>
    setChat(oldValue => [
      ...oldValue,
      {
        role,
        message,
      },
    ]);

  const {mutate, isLoading} = useMutation(postGenerations, {
    onMutate: () => onCreateChatMessage({role: Role.user, message: input}),
    onSuccess: ({data: {data}}) =>
      onCreateChatMessage({
        role: Role.assistant,
        message: data[0].url,
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
    <ImageGeneration
      chat={chat}
      onSendMessage={handleOnSendMessage}
      onChangeInput={handleOnChangeInput}
      inputValue={input}
      isLoading={isLoading}
      onBack={handleOnBack}
    />
  );
};

export {ImageGenerationScreen};
