import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddPlace = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(title, description, address);

    const placeData = {
      title: title,
      description: description,
      address: address,
      image: image,
      creator: '64c9f3f9ac7c98172e82543b',
    };
    axios
      .post('/api/v1/places/', placeData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log('Server responded');
        } else if (error.request) {
          console.log('network error');
        } else {
          console.log(error);
        }
      });
      navigate('/')
  };
  return (
    <>
      <h3>Add Place</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="title" className="my-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="description" className="my-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="address" className="my-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="image" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-2">
          Add Place
        </Button>
      </Form>
    </>
  );
};

export default AddPlace;
