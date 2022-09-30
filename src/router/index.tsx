import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loadable from '../components/load/loadable';

const Counter = Loadable(lazy(() => import('../features/counter')));
const Home = Loadable(lazy(() => import('../features/home')));
const Section = Loadable(lazy(() => import('../features/section')));

export default function SetupRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/section" element={<Section />} />
    </Routes>
  );
}
