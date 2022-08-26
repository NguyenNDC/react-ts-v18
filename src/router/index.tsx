import { Route, Routes } from 'react-router-dom';

import Counter from '../features/counter';
import Home from '../features/home';
import Section from '../features/section';

export default function SetupRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/section" element={<Section />} />
    </Routes>
  );
}
