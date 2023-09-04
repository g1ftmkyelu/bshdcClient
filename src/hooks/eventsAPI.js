import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'https://bshdc-admin.onrender.com/api/events';

// Fetch all events
export const useFetchAllEvents = () => {
  return useQuery(['events'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one event by ID
export const useFetchEventById = (id) => {
  return useQuery(['event', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new event
export const useAddEvent = () => {
  return useMutation(async (newEvent) => {
    const { data } = await axios.post(BASE_URL, newEvent);
    return data;
  });
};

// Update an event by ID
export const useUpdateEvent = () => {
  return useMutation(async ({ id, updatedEvent }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedEvent);
    return data;
  });
};

// Delete an event by ID
export const useDeleteEvent = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
