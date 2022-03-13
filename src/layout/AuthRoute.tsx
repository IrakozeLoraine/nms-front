import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyUpload from '../views/notes/MyUpload';
import Note from '../views/notes/Note';
import Accessed from '../views/recent/Accessed';
import Uploaded from '../views/recent/Uploaded';
import Dashboard from './Dashboard';

export default function AuthRoute() {
  const AuthenticatedRoutes = () => (
    <Routes>
      {/* <Route path="home" element={<Home />} /> */}
      <Route path="recent-uploads" element={<Uploaded />} />
      <Route path="recent-access" element={<Accessed />} />
      <Route path="my-uploads" element={<MyUpload />} />
      <Route path="notes" element={<Note />} />
    </Routes>
  );
  return <Dashboard showSearch>{AuthenticatedRoutes()}</Dashboard>;
}
