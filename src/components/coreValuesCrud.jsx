import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useFetchAllCoreValues, useAddCoreValue, useUpdateCoreValue, useDeleteCoreValue } from '../hooks/coreValuesAPI';

const CoreValuesCrud = () => {
    const queryClient = useQueryClient();
    const { data: coreValues, isLoading, isError } = useFetchAllCoreValues();
    const addCoreValue = useAddCoreValue();
    const updateCoreValue = useUpdateCoreValue();
    const deleteCoreValue = useDeleteCoreValue();

    const [isAdding, setIsAdding] = useState(false);
    const [newCoreValue, setNewCoreValue] = useState({
        Icon: '',
        Title: '',
        SubTitle: '',
        Description: ''
    });

    const handleAddClick = () => {
        setIsAdding(true);
    };

    const handleCancelAdd = () => {
        setIsAdding(false);
        // Clear the newCoreValue state
        setNewCoreValue({
            Icon: '',
            Title: '',
            SubTitle: '',
            Description: ''
        });
    };

    const handleSaveNewCoreValue = async () => {
        try {
            await addCoreValue.mutateAsync(newCoreValue);
            setIsAdding(false);
            // Refetch the coreValues list after adding a new one
            queryClient.invalidateQueries(['coreValues']);
        } catch (error) {
            console.error('Error adding core value:', error);
        }
    };

    const handleDeleteCoreValue = async (id) => {
        try {
            await deleteCoreValue.mutateAsync(id);
            // Refetch the coreValues list after deleting
            queryClient.invalidateQueries(['coreValues']);
        } catch (error) {
            console.error('Error deleting core value:', error);
        }
    };

    const handleEditCoreValue = async (id, updatedCoreValue) => {
        try {
            await updateCoreValue.mutateAsync({ id, updatedCoreValue });
            // Refetch the coreValues list after updating
            await coreValues.refetch();
        } catch (error) {
            console.error('Error updating core value:', error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching core values</div>;
    }

    return (
        <div>
            <h2>Core Values</h2>
            <button onClick={handleAddClick}>Add Core Value</button>
            {isAdding && (
                <div>
                    <input
                        type="text"
                        placeholder="Icon"
                        value={newCoreValue.Icon}
                        onChange={(e) => setNewCoreValue({ ...newCoreValue, Icon: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        value={newCoreValue.Title}
                        onChange={(e) => setNewCoreValue({ ...newCoreValue, Title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="SubTitle"
                        value={newCoreValue.SubTitle}
                        onChange={(e) => setNewCoreValue({ ...newCoreValue, SubTitle: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newCoreValue.Description}
                        onChange={(e) => setNewCoreValue({ ...newCoreValue, Description: e.target.value })}
                    />
                    <button onClick={handleSaveNewCoreValue}>Save</button>
                    <button onClick={handleCancelAdd}>Cancel</button>
                </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Title</th>
                        <th>SubTitle</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {coreValues.map((coreValue) => (
                        <tr key={coreValue._id}>
                            <td>{coreValue.Icon}</td>
                            <td>{coreValue.Title}</td>
                            <td>{coreValue.SubTitle}</td>
                            <td>{coreValue.Description}</td>
                            <td>
                                <button onClick={() => handleEditCoreValue(coreValue._id, {
                                    Icon: 'New Icon',
                                    Title: 'New Title',
                                    SubTitle: 'New SubTitle',
                                    Description: 'New Description'
                                })}>Edit</button>
                                <button onClick={() => handleDeleteCoreValue(coreValue._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoreValuesCrud;
