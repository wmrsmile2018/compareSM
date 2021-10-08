import { createSlice } from '@reduxjs/toolkit';
import {
  sagaEventCallBegan,
  sagaEventCallFail,
  sagaEventCallSuccess,
} from '../saga';

const initialState = {
  users: [],
  user: {
    id: '',
    firstName: '',
    secondName: '',
  },
  error: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers(state, action) {
      state.users = action.payload;
    },
    fetchUser(state, action) {
      state.user = action.payload;
    },
    putUser(state, action) {
      state.user = action.payload;
    },
    fetchError(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(sagaEventCallBegan, (state) => {});
    builder.addCase(sagaEventCallSuccess, (state) => {});
    builder.addCase(sagaEventCallFail, (state) => {});
  },
});

export default usersSlice.reducer;

export const { fetchUsers, fetchUser, fetchError, putUser } =
  usersSlice.actions;
