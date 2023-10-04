import axios from 'axios';
import { useQuery} from '@tanstack/react-query';


const BASE_URL = 'https://bshdc-admin.onrender.com/api/contacts';

// Fetch all contacts
export const useFetchAllcontacts = () => {
  return useQuery(['contacts'], async () => {
    const { data } = await axios.get(BASE_URL);
    console.log(data);
    return data;
  });
};