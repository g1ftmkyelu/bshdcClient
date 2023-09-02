import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const DynamicForm = ({ title, buttonText, formFields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card className="mt-4">
      <Card.Header>
        <h4>{title}</h4>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map((field, index) => (
            <Form.Group key={index} controlId={field.name}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type || 'text'}
                placeholder={field.placeholder}
                {...register(field.name, {
                  required: `${field.label} is required`,
                  // Add more validation rules here (e.g., minLength, pattern)
                })}
              />
              {errors[field.name] && (
                <Form.Text className="text-danger">
                  {errors[field.name].message}
                </Form.Text>
              )}
            </Form.Group>
          ))}

          <Button type="submit" className='my-2' variant="primary">
            {buttonText} <BsArrowRight className="ml-2" />
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DynamicForm;
