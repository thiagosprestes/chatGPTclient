import React, {useState} from 'react';
import {Home} from './ui';
import {Choice} from '../../models/choice';
import {Role} from '../../models/role';

interface HomeProps {}

const HomeSreen = ({}: HomeProps) => {
  const [chat, setChat] = useState<Choice[]>([]);
  const [input, setInput] = useState('');

  const haveMessages = chat.length > 0;
  const messagesLenght = chat.length;

  const lastMessageIndex = messagesLenght - 1;

  const handleOnSendMessage = () => {
    setInput('');
    setChat(oldValue => [
      ...oldValue,
      {
        index: haveMessages ? chat[lastMessageIndex].index + 1 : 0,
        message: {
          role: Role.user,
          content: input,
        },
      },
    ]);
  };

  const handleOnChangeInput = (value: string) => {
    setInput(value);
  };

  return (
    <Home
      chat={chat}
      onSendMessage={handleOnSendMessage}
      onChangeInput={handleOnChangeInput}
      inputValue={input}
    />
  );
};

export {HomeSreen};
