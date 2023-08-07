import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import '../index.css';
import Place from '../components/Place';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const { data } = await axios.get('/api/v1/places');
      setPlaces(data);
    };
    fetchPlaces();
  }, []);

  console.log(places);

  return (
    <>
      <Row>
        <Col>
          <h3 className="py-3">Places</h3>
        </Col>
        <Col className="mr-0 text-end">
          <Link to="/places/add">
            <Button variant="primary">Add Place</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {places.map((place) => (
          <Place key={place._id} places={place} />
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
