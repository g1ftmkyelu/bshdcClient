import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'http://localhost:7070/api/partners';

// Fetch all partners
export const useFetchAllPartners = () => {
  return useQuery('partners', async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one partner by ID
export const useFetchPartnerById = (id) => {
  return useQuery(['partner', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new partner
export const useAddPartner = () => {
  return useMutation(async (newPartner) => {
    const { data } = await axios.post(BASE_URL, newPartner);
    return data;
  });
};

// Update a partner by ID
export const useUpdatePartner = () => {
  return useMutation(async ({ id, updatedPartner }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedPartner);
    return data;
  });
};

// Delete a partner by ID
export const useDeletePartner = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
