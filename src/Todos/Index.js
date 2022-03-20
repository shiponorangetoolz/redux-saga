import { Button,Row,Col,Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Create  from './Create';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/reducers/todoSlice';

function Index() {
  const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

  // useEffect(() => {
	// 	dispatch(getContactsSuccess());
	// }, [dispatch]);

  const handleDeleteClick = (Title) => {
    dispatch(deleteTodo({ Title }));
  };

  return (
    <div className="App">
      <div className="col-md-6 mx-auto mt-10">
        <Create />
        <div><Button className='py-10'> Todo List</Button></div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { todos !== undefined &&
          todos.map((todo,index)=>
            <tr key={todo.title}>
              <td>{todo.title}</td>
              <td>
                <Button onClick={() => handleDeleteClick(todo.title)}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </Table>        
      </div>
    </div>
  );
}

export default Index;
