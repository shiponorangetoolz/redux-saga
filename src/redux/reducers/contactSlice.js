import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'contacts',
  initialState:{
	  isLoading:false,
	  contacts:[]
  },
  reducers: {
	getContactListFetch: (state) => {
		state.isLoading = true
	},  

	getContactsListSuccess: (state, action) => {
        state.contacts= action.payload;
		state.isLoading = false;
    },
	
	getContactListError: (state) => {
		state.isLoading = false
	}, 
  },
})

export const {getContactListFetch, getContactsListSuccess, getContactListError} = counterSlice.actions

export default counterSlice.reducer