import axios from 'axios';
import {API_TOKEN} from '@env';

const client = axios.create({
  baseURL: 'https://api.openai.com/v1/',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export {client};
