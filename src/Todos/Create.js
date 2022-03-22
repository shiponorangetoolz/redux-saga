import axios from "axios";
import { useState } from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Create() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    
    const history = useNavigate();

    const postData = (e) => {
        e.preventDefault();
        dispatch(
            // addTodo({
            //     title: title,
            // })
        );
    }

    return (
      <main style={{ padding: "1rem 10rem" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={postData}>
                Creae
            </Button>
        </Form>
      </main>
    );
}

export default Create;