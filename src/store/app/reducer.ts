import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface AuthInterface {
  token: string;
  refreshToken: string;
}

export interface ResDataInterface {
  status: number;
  data: {
    token: string;
    refreshToken: string;
  };
}

export interface AppInterface {
  isLoggedIn: boolean;
  isFetching: boolean;
  auth: AuthInterface;
}

const init: AppInterface = {
  isLoggedIn: false,
  isFetching: false,
  auth: {
    token: '',
    refreshToken: ''
  }
};

export const fetchUsers = createAsyncThunk<ResDataInterface>('token/fetchUsers', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${process.env.URL}/login`);
    return response.data;
    // eslint-disable-next-line
  } catch (error: any | unknown) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const slice = createSlice({
  name: 'user',
  initialState: init,
  reducers: {
    getRefreshToken: (state, { payload }) => {
      state.auth.token = payload.token;
      state.auth.refreshToken = `refresh token${payload.refreshToken}`;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.auth = {} as AuthInterface;
      state.isFetching = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.auth.token = payload.data.token;
      state.auth.refreshToken = `refresh token${payload.data.refreshToken}`;
      state.isLoggedIn = true;
      state.isFetching = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.auth = {} as AuthInterface;
      state.isLoggedIn = false;
      state.isFetching = false;
    });
  }
});

export const { getRefreshToken } = slice.actions;

export default slice.reducer;
