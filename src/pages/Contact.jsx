import React from 'react';
import { DynamicForm, HeroSection } from '../components';
import { Container } from 'react-bootstrap';
import { ContactFormData } from '../assets/data/data';

const Contact = () => {
    const {ButtonText,Fields,Title}=ContactFormData
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
                    onSubmit={()=>alert('submited')}
                
                />
            </Container>
        </>
    );
}

export default Contact;
