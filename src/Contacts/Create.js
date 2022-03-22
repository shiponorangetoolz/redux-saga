import axios from "axios";
import { useState } from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function Expenses() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const history = useNavigate();

    const postData = (e) => {
        e.preventDefault();
    }
    return (
      <main style={{ padding: "1rem 10rem" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>ne
                <Form.Control type="text" placeholder="Enter phone" onChange={(e) => setphone(e.target.value)}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)}  />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={postData}>
                Submit
            </Button>
        </Form>
      </main>
    );
}