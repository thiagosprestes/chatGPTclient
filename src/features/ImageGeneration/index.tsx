import React, {useState} from 'react';
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

const ImageGenerationScreen = ({navigation}: ImageGenerationScreenProps) => {
  const [chat, setChat] = useState<ImageChat[]>([]);
  const [input, setInput] = useState('');

  const {mutate, isLoading} = useMutation(postGenerations, {
    onMutate: () => {
      setChat(oldValue => [
        ...oldValue,
        {
          role: Role.user,
          message: input,
        },
      ]);
    },
    onSuccess: ({data}) => {
      setChat(oldValue => [
        ...oldValue,
        {
          role: Role.assistant,
          message: data.data[0].url,
        },
      ]);
    },
    onError: error => {
      console.log('there was an error', error);
    },
  });

  const handleOnSendMessage = () => {
    mutate(input);
    setInput('');
  };

  const handleOnChangeInput = (value: string) => setInput(value);

  const handleOnBack = () => {
    navigation.goBack();
  };

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
