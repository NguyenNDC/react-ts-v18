import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SetupRouter from './router';
import { Header, Main, Footer } from './layouts';

import { ThemeContext } from './context/theme/ThemeContext';
import './assets/styles/_main.scss';

export default function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <Header />
        <Main>
          <SetupRouter />
        </Main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
