import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';


const BASE_URL = 'https://bshdc-admin.onrender.com/api/timeline-items';

// Fetch all timeline items
export const useFetchAllTimelineItems = () => {
  return useQuery(['timelineItems'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one timeline item by ID
export const useFetchTimelineItemById = (id) => {
  return useQuery(['timelineItem', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new timeline item
export const useAddTimelineItem = () => {
  return useMutation(async (newTimelineItem) => {
    const { data } = await axios.post(BASE_URL, newTimelineItem);
    return data;
  });
};

// Update a timeline item by ID
export const useUpdateTimelineItem = () => {
  return useMutation(async ({ id, updatedTimelineItem }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedTimelineItem);
    return data;
  });
};

// Delete a timeline item by ID
export const useDeleteTimelineItem = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
