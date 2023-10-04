import React, {useState} from 'react';
import {ImageGeneration} from './ui';
import {Choice} from '../../models/choice';
import {Role} from '../../models/role';
import {useMutation} from 'react-query';
import {postCompletions} from '../../services/endpoints';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RoutesParams} from '../../navigation/routes';

type ImageGenerationScreenProps = NativeStackScreenProps<
  RoutesParams,
  'ImageGeneration'
>;

const ImageGenerationScreen = ({navigation}: ImageGenerationScreenProps) => {
  const [chat, setChat] = useState<Choice[]>([]);
  const [input, setInput] = useState('');

  const {mutate, isLoading} = useMutation(postCompletions, {
    onMutate: () => {
      setChat(oldValue => [
        ...oldValue,
        {
          message: {
            role: Role.user,
            content: input,
          },
        },
      ]);
    },
    onSuccess: ({data}) => {
      setChat(oldValue => [
        ...oldValue,
        {
          message: {
            role: data.choices[0].message.role,
            content: data.choices[0].message.content,
          },
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
