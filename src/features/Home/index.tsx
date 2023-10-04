import React, {useState} from 'react';
import {Home} from './ui';
import {Choice} from '../../models/choice';
import {Role} from '../../models/role';
import {useMutation} from 'react-query';
import {postCompletions} from '../../services/completions';

interface HomeProps {}

const HomeSreen = ({}: HomeProps) => {
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

  return (
    <Home
      chat={chat}
      onSendMessage={handleOnSendMessage}
      onChangeInput={handleOnChangeInput}
      inputValue={input}
      isLoading={isLoading}
    />
  );
};

export {HomeSreen};
