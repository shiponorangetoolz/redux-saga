import axios from "axios";
import { useEffect, useState } from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Expenses() {
    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const history = useNavigate();
    let {contactId} = useParams();

    const [contact, setContact] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/v1/contact/${contactId}`)
          .then((response) => {
            setContact(response.data);
            setName(response.data.name);
            setphone(response.data.phone);
            setEmail(response.data.email);
            setAddress(response.data.address);
          })
        },[])

    const updateContact= (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/v1/contacts/${contactId}`, {
            name,
            phone,
            email,
            address
        })
        .then(function (response) {
            history('/');
        })
    }

    return (
      <main style={{ padding: "1rem 10rem" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>ne
                <Form.Control type="text" placeholder="Enter phone" value={phone} onChange={(e) => setphone(e.target.value)}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)}  />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={updateContact}>
                Submit
            </Button>
        </Form>
      </main>
    );
}