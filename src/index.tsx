import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import axios, { IAxios } from './plugin/axios';
import { store } from './store/store';

import App from './App';
import { env } from './config';

import reportWebVitals from './reportWebVitals';
import './assets/styles/_global.scss';

const setup: IAxios = {
  api: env.api
};

axios(setup);

// eslint-disable-next-line
const container: HTMLElement = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
