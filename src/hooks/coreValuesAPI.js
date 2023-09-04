import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'https://bshdc-admin.onrender.com/api/core-values';

// Fetch all core values
export const useFetchAllCoreValues = () => {
  return useQuery(['coreValues'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one core value by ID
export const useFetchCoreValueById = (id) => {
  return useQuery(['coreValue', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new core value
export const useAddCoreValue = () => {
  return useMutation(async (newCoreValue) => {
    const { data } = await axios.post(BASE_URL, newCoreValue);
    return data;
  });
};

// Update a core value by ID
export const useUpdateCoreValue = () => {
  return useMutation(async ({ id, updatedCoreValue }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedCoreValue);
    return data;
  });
};

// Delete a core value by ID
export const useDeleteCoreValue = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
