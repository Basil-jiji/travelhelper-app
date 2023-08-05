import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const PlaceScreen = () => {
  const [place, setPlace] = useState({});
  const { id: placeId } = useParams();

  useEffect(() => {
    const fetchPlace = async () => {
      const { data } = await axios.get(`/api/v1/places/${placeId}`);
      setPlace(data);
    };
    fetchPlace();
  }, [placeId])

  console.log(place)

  return (
    
    <>
    {/* {console.log(place.place.description)} */}
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <p>{place.description}</p>
    </>
  );
};

export default PlaceScreen;
