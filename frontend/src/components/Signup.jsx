import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  //   useEffect(() => {
  //     if(user){
  //         setName(user.name)
  //         setEmail(user.email)
  //         setPassword(user.password)
  //     }
  //   })

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password);

    const userData = {
      name: name,
      email: email,
      password: password,
      image: 'Backend/uploads/images/b3544d68-bf30-47db-9173-cb8c23ae3cb0.png',
    };
    axios
      .post('/api/v1/users/signup', userData)
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
  };

  return (
    <>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="my-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="my-3">
          <Form.Label>confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {/* <Form.Group controlId="image" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group> */}
        <Button type="submit" variant="primary" className="mt-2">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default Signup;
