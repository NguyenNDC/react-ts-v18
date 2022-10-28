import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Loadable from '../components/load/loadable';
import Demo from '../features/demo';
import RequireAuth from './routerAuth';

const Counter = Loadable(lazy(() => import('../features/counter')));
const Home = Loadable(lazy(() => import('../features/home')));
const Section = Loadable(lazy(() => import('../features/section')));

export const history = createBrowserHistory();

export default function SetupRouter() {
  const protectedLayout = (
    <RequireAuth>
      <Demo />
    </RequireAuth>
  );
  return (
    <Routes history={history}>
      <Route path="/login" element={protectedLayout}>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/section" element={<Section />} />
      </Route>
    </Routes>
  );
}
