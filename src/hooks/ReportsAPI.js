import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'http://localhost:8080/api/reports';

// Fetch all Reports
export const useFetchAllReports = () => {
  return useQuery(['reports'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};