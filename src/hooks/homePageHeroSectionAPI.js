import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'http://localhost:7070/api/hero-section';

// Fetch all hero sections
export const useFetchAllHomePageHeroSections = () => {
  return useQuery('homePageHeroSections', async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one hero section by ID
export const useFetchHomePageHeroSectionById = (id) => {
  return useQuery(['homePageHeroSection', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new hero section
export const useAddHomePageHeroSection = () => {
  return useMutation(async (newHeroSection) => {
    const { data } = await axios.post(BASE_URL, newHeroSection);
    return data;
  });
};

// Update a hero section by ID
export const useUpdateHomePageHeroSection = () => {
  return useMutation(async ({ id, updatedHeroSection }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedHeroSection);
    return data;
  });
};

// Delete a hero section by ID
export const useDeleteHomePageHeroSection = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
