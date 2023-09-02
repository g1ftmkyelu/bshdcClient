import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'http://localhost:7070/api/website-navigation-links';

// Fetch all website navigation links
export const useFetchAllWebsiteNavigationLinks = () => {
  return useQuery('websiteNavigationLinks', async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one website navigation link by ID
export const useFetchWebsiteNavigationLinkById = (id) => {
  return useQuery(['websiteNavigationLink', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new website navigation link
export const useAddWebsiteNavigationLink = () => {
  return useMutation(async (newWebsiteNavigationLink) => {
    const { data } = await axios.post(BASE_URL, newWebsiteNavigationLink);
    return data;
  });
};

// Update a website navigation link by ID
export const useUpdateWebsiteNavigationLink = () => {
  return useMutation(async ({ id, updatedWebsiteNavigationLink }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedWebsiteNavigationLink);
    return data;
  });
};

// Delete a website navigation link by ID
export const useDeleteWebsiteNavigationLink = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
