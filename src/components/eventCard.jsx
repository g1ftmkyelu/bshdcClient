import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const sanitizeHTML = (html) => {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText;
};

function EventCard({ event }) {
    const { _id,title, author, thumbnail, createdAt } = event;
  
    // Truncate the content field (for example, first 100 characters)
    const truncatedContent = event.content.substring(0, 100) + '...';
  
    return (
      <Card>
        <Card.Img variant="top" src={thumbnail} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{sanitizeHTML(truncatedContent)}</Card.Text>
          <Button variant="primary" role='link' href={`/events/${_id}`}>View</Button>
          <Card.Footer>
            <small className="text-muted">Author: {author}</small>
            <br />
            <small className="text-muted">Created At: {new Date(createdAt).toLocaleDateString()}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
  
  export default EventCard;
  