import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PlaceScreen = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [place, setPlace] = useState({});
  const { id: placeId } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlace = async () => {
      const { data } = await axios.get(`/api/v1/places/${placeId}`);
      setPlace(data);
      if (data) {
        setTitle(data.title);
        setDescription(data.description);
      }
    };
    fetchPlace();
  }, [placeId]);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatePlace = {
      title: title,
      description: description,
    };
    axios
      .patch(`/api/v1/places/${placeId}`, updatePlace)
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

  const deleteHandler = () => {
    axios.delete(`/api/v1/places/${placeId}`,placeId);
    navigate('/')
  }

  return (
    <>
      <Row>
        <Col>
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </Col>
      </Row>
      <h1>{place.title}</h1>
      <Image src={place.image} fluid />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PlaceScreen;
