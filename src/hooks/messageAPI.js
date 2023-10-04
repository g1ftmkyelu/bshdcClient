import axios from 'axios';
import { useMutation } from '@tanstack/react-query';


const BASE_URL = 'http://localhost:8080/api/message';

// Add a new message
export const useAddmessage = () => {
  return useMutation(async (newmessage) => {
    const { data } = await axios.post(BASE_URL, newmessage, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return data;
  });
};
