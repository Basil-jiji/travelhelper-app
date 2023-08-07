import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../index.css';
import Place from '../components/Place';

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
      <h1 className="text-center py-3">Places</h1>
      <Row >
        {places.map((place) => (
          <Place places={place} />
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
