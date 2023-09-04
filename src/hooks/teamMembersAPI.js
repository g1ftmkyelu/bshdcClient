import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

const BASE_URL = 'https://bshdc-admin.onrender.com/api/team-members';

// Fetch all team members
export const useFetchAllTeamMembers = () => {
  return useQuery(['teamMembers'], async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
  });
};

// Fetch one team member by ID
export const useFetchTeamMemberById = (id) => {
  return useQuery(['teamMember', id], async () => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  });
};

// Add a new team member
export const useAddTeamMember = () => {
  return useMutation(async (newTeamMember) => {
    const { data } = await axios.post(BASE_URL, newTeamMember);
    return data;
  });
};

// Update a team member by ID
export const useUpdateTeamMember = () => {
  return useMutation(async ({ id, updatedTeamMember }) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, updatedTeamMember);
    return data;
  });
};

// Delete a team member by ID
export const useDeleteTeamMember = () => {
  return useMutation(async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
  });
};
