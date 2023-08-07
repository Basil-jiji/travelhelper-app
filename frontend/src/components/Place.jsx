import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = ({ places }) => {
  return (
    <>
      <Card className="places-card">
        <Card.Body>
          <Link to={`/places/${places._id}`}>
            <Card.Text className="text-center fw-bold">
              {places.title}
            </Card.Text>
            <Card.Text>{places._id}</Card.Text>
            <Card.Text className="text-center">{places.description}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Place;
