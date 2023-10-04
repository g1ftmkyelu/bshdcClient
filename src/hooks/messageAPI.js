import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'https://bshdc-admin.onrender.com/api/message';

// Fetch all messages
export const useFetchAllmessages = () => {
  return useQuery(['messages'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one message by ID
export const useFetchmessageById = (id) => {
  return useQuery(['message', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new message
export const useAddmessage = () => {
  return useMutation(async (newmessage) => {
    const { data } = await axios.post(BASE_URL, newmessage);
    console.log(newmessage)
    return data;
  });
};

// Update a message by ID
export const useUpdatemessage = () => {
  return useMutation(async ({ id, updatedmessage }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedmessage);
    return data;
  });
};

// Delete a message by ID
export const useDeletemessage = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
