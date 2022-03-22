import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers/contactSlice';
import todoReducer from '../redux/reducers/todoSlice'
import createSagaMiddleware from '@redux-saga/core';
import contactSaga  from './sagas/rootSaga';

const saga = createSagaMiddleware();

export default configureStore({
	reducer: {
		contacts: contactReducer,
		todos: todoReducer,
	},
	middleware:[saga]
});

saga.run(contactSaga);