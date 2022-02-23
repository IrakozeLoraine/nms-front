import React from 'react';
import Dashboard from '../layout/Dashboard';

export default function Home() {
  return (
    <Dashboard showSearch>
      <div className="block relative w-full h-auto py-8 px-11">
        <div className="bg-main px-24 py-8 h-screen"></div>
      </div>
    </Dashboard>
  );
}
