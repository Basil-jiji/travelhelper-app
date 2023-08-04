import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <h1>Places</h1>
          {places.map((place) => (
            <h2 key={place._id}>{place.title}</h2>
          ))}
    </>
  );
};

export default HomeScreen;
