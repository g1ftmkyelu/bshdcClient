import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'https://bshdc-admin.onrender.com/api/contact-details';

// Fetch web contact details
export const useFetchWebContactDetails = () => {
  return useQuery(['webContactDetails'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Update web contact details
export const useUpdateWebContactDetails = () => {
  return useMutation(async (updatedWebContactDetails) => {
    const { data } = await axios.put(BASE_URL, updatedWebContactDetails);
    return data;
  });
};
