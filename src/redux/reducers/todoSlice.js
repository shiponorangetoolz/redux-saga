import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				title: action.payload.title,
			};
			state.push(todo);
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.title !== action.payload.title);
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;