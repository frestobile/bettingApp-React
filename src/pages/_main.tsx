import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Sign from './sign';
import UserStats from './userStats';
const Main = () => (
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/userstats" element={<UserStats />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Main;
