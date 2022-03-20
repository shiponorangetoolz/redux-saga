import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// export const getContactsAsync = createAsyncThunk(
// 	'contacts/getCotactsAsync',
// 	async () => {
// 		const resp = await fetch('http://localhost:8000/api/v1/contacts');
// 		if (resp.ok) {
// 			const contacts = await resp.json();
// 			return { contacts };
// 		}
// 	}
// );

export const addContactAsync = createAsyncThunk(
	'contacts/addContactAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:8000/api/v1/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
                address: payload.name,
             }),
		});

		if (resp.ok) {
			const contact = await resp.json();
			return { contact };
		}
	}
);

export const deleteContactAsync = createAsyncThunk(
	'contacts/deleteContactAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:8000/api/v1/contacts/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

export const counterSlice = createSlice({
  name: 'contacts',
  initialState:{
	  isLoading:false,
	  contacts:[]
  },
  reducers: {
	getContactListFetch: (state) => {
		state.isLoading = true
		console.log(state.isLoading,'...get');
	},  

	getContactsListSuccess: (state, action) => {
        state.contacts= action.payload;
		state.isLoading = false;
		console.log(state.isLoading,'...success');
    },
	
	getContactListError: (state) => {
		state.isLoading = true
	}, 
	// 
    deleteTodo: (state, action) => {
        return state.filter((contact) => contact.id !== action.payload.id);
    },
  },
  extraReducers: {
    // [getContactsAsync.fulfilled]: (state, action) => {
    //     return action.payload.contacts;
    // },
    [addContactAsync.fulfilled]: (state, action) => {
        state.push(action.payload.contact);
    },
    [deleteContactAsync.fulfilled]: (state, action) => {
        return state.filter((contact) => contact.id !== action.payload.id);
    },
},
})

// Action creators are generated for each case reducer function
export const {getContactListFetch, getContactsListSuccess, deleteTodo} = counterSlice.actions

export default counterSlice.reducer