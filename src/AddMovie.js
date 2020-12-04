import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import $ from "jquery";

function AddMovie(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var hideModal = hideModalInfo => {
    $("#myModal").modal("hide");
  };

  const [newMovie, setNewMovie] = useState({
    image: null,
    title: "",
    description: "",
    rate: 0,
  });

  return (
    <div className="bbb">
      <br />
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>
      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <></>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close Modal</Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
}

export default AddMovie;
