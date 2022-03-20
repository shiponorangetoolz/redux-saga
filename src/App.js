import logo from './logo.svg';
import './App.css';
import { Button,Row,Col,Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContactListFetch, deleteContactAsync } from './redux/reducers/contactSlice';

function App() {
  const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.contacts.isLoading);
	const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
		dispatch(getContactListFetch());
	}, [dispatch]);

  const handleDeleteClick = (id) => {
    dispatch(deleteContactAsync({ id }));
  };

  return (
    <div className="App">
      {isLoading && <Link to="/todos"><Button className='py-10'>Loading...</Button></Link>}
      {!isLoading && 
      <div className="col-md-6 mx-auto mt-10">
        <Link to="/create"><Button className='py-10'>Add</Button></Link>
        <Link to="/todos"><Button className='py-10'>Todo List</Button></Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { contacts !== undefined &&
          contacts.map((contact,index)=>
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>{contact.address}</td>
              <td>
                <Link to={`contact/${contact.id}`}>Edit</Link>
                <Button onClick={() => handleDeleteClick(contact.id)}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </Table>        
      </div>}
    </div>
  );
}

export default App;
