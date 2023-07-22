import { useState } from 'react';
import BrightFuture from './components/BrightFuture';
import Navbar from './components/Navbar';
import New from './components/New';
import Reviving from './components/Reviving';
import Sidebar from './components/Sidebar';

const App = () => {
  console.log('test');
  return (
    <main className="container mx-auto">
      <div className="p-5 relative">
        <Navbar />
        <Sidebar />
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-10">
          <BrightFuture />
          <New />
          <Reviving />
        </div>
      </div>
    </main>
  );
};

export default App;
