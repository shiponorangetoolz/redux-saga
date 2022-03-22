import logo from './logo.svg';
import './App.css';
import { Button,Row,Col,Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContactListFetch,  } from './redux/reducers/contactSlice';

function App() {
  const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.contacts.isLoading);
	const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
		dispatch(getContactListFetch());
	}, [dispatch]);

  return (
    <div className="App">
      {isLoading ? <Link to="/todos"><Button className='py-10'>Loading...</Button></Link> :
      <div className="col-md-6 mx-auto mt-10">
      <h6>User List</h6>
      {/* <Link to="/create"><Button className='py-10'>Add</Button></Link> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Uername</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        { contacts !== undefined &&
        contacts.map((contact,index)=>
          <tr key={contact.id}>
            <td>{index + 1}</td>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.email}</td>
          </tr>
        )}
        </tbody>
      </Table>        
    </div>}
      
    </div>
  );
}

export default App;
