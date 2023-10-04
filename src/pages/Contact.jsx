import React from 'react';
import { DynamicForm, HeroSection } from '../components';
import { Container } from 'react-bootstrap';
import { ContactFormData } from '../assets/data/data';
import { useAddmessage } from '../hooks/messageAPI';
import Swal from 'sweetalert2';


const Contact = () => {
    const { ButtonText, Fields, Title } = ContactFormData;

    // Define a mutation hook for adding a new message
    const addMessageMutation = useAddmessage();

    const handleSubmit = async (formData) => {
        try {
            // Show a confirmation dialog to the user
            const result = await Swal.fire({
                title: 'Confirm Message Submission',
                text: 'Are you sure you want to submit this message?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, submit it!',
                cancelButtonText: 'Cancel',
            });
    
            if (result.isConfirmed) {
                // Send the new message data to the API
                await addMessageMutation.mutateAsync(formData);
    
                // Show a success message to the user
                Swal.fire({
                    title: 'Success',
                    text: 'Message submitted successfully',
                    icon: 'success',
                });
            } else {
                // The user canceled the submission
                Swal.fire({
                    title: 'Cancelled',
                    text: 'Message submission was cancelled',
                    icon: 'info',
                });
            }
        } catch (error) {
            // Handle API request error
            console.error(error);
            // Show an error message to the user
            Swal.fire({
                title: 'Error',
                text: 'Error submitting message. Please try again later.',
                icon: 'error',
            });
        }
    };
    

    return (
        <>
            <HeroSection
                HeroImage={'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
                Caption={'contact us'}
            />
            <Container className='py-lg-5'>
                <DynamicForm
                    title={Title}
                    formFields={Fields}
                    buttonText={ButtonText}
                    onSubmit={handleSubmit} // Use the handleSubmit function for form submission
                />
            </Container>
        </>
    );
}

export default Contact;
