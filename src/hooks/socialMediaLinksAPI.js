import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'https://bshdc-admin.onrender.com/api/social-media-links';

// Fetch all social media links
export const useFetchAllSocialMediaLinks = () => {
  return useQuery(['socialMediaLinks'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one social media link by ID
export const useFetchSocialMediaLinkById = (id) => {
  return useQuery(['socialMediaLink', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new social media link
export const useAddSocialMediaLink = () => {
  return useMutation(async (newSocialMediaLink) => {
    const { data } = await axios.post(BASE_URL, newSocialMediaLink);
    return data;
  });
};

// Update a social media link by ID
export const useUpdateSocialMediaLink = () => {
  return useMutation(async ({ id, updatedSocialMediaLink }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedSocialMediaLink);
    return data;
  });
};

// Delete a social media link by ID
export const useDeleteSocialMediaLink = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
