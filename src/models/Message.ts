import {ReactElement} from 'react';
import {Role} from './role';

interface Message {
  role: Role;
  content: string | ReactElement;
}

export type {Message};
