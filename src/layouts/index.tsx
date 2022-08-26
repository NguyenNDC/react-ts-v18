import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SetupRouter from '../router';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import '../assets/styles/_main.scss';

export default function Layout() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Main>
          <SetupRouter />
        </Main>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}
