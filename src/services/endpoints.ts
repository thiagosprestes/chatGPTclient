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

interface ImageGenerationData {
  url: string;
}

interface CompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

interface ImageGenerationResponse {
  created: number;
  data: ImageGenerationData[];
}

const postCompletions = async (message: string) => {
  const response = await client.post<CompletionResponse>('chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{role: 'user', content: message}],
  });
  return response;
};

const postGenerations = async (message: string) => {
  const response = await client.post<ImageGenerationResponse>(
    'images/generations',
    {
      prompt: message,
    },
  );
  return response;
};

export {postCompletions, postGenerations};
