import { Store, AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppInterface, getRefreshToken } from '../store/app/reducer';

// eslint-disable-next-line
export const setInterceptors = (store: Store<any, AnyAction>) => {
  const URL = process.env.REACT_APP_URL;
  const state: AppInterface = store.getState();
  const dispatch = store.dispatch;
  const instance = axios.create({
    baseURL: URL,
    timeout: 1000
  });

  instance.interceptors.request.use(
    (config) => {
      const token = state.auth.token;
      if (token && config.headers) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;

      if (error.response.status === 401 && originalRequest.url === `${URL}/auth/token`) {
        window.location.replace(`${URL}/login`);
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = state.auth.refreshToken;
        return axios
          .post('/auth/token', {
            refresh_token: refreshToken
          })
          .then((res) => {
            if (res.status === 201) {
              dispatch(getRefreshToken);
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.auth.token;
              return axios(originalRequest);
            }
          });
      }
      return Promise.reject(error);
    }
  );
};
