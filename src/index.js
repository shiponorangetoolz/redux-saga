import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Index from '../src/Todos/Index';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Contacts/Create'
import Update from './Contacts/Update'
import TodoCreate from './Todos/Create'
import store from './redux/store';
import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="create" element={<Create />} />
          <Route
            path="contact/:contactId"
            element={<Update />}
          />
          <Route path="/" element={<App />} />
          <Route path="/todos" element={<Index />} />
          <Route path="/todos/create" element={<TodoCreate />} />
        </Routes>
      </BrowserRouter>,
    </Provider>
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
