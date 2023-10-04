import {Message} from '../models/Message';
import {client} from './client';

interface Choice {
  index: number;
  message: Message;
  finish_reason: string;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface CompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

const postCompletions = async (message: string) => {
  const response = await client.post<CompletionResponse>('completions', {
    model: 'gpt-3.5-turbo',
    messages: [{role: 'user', content: message}],
  });
  return response;
};

export {postCompletions};
