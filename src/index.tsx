import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { ThemeProvider } from './context/theme/ThemeContext';
import { store, persistor } from './store/store';

import { setInterceptors } from './plugin/axios';
import './locales/i18n';

import './assets/styles/_global.scss';
import reportWebVitals from './reportWebVitals';

const openSansObserver = new FontFaceObserver('Poppins', {});
openSansObserver.load().then(() => {
  console.log('Output Poppins has loaded.');
});

// eslint-disable-next-line
const container: HTMLElement = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </HelmetProvider>
);

reportWebVitals();
setInterceptors(store);
