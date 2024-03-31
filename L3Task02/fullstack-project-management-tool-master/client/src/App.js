import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Task from "./components/Task";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./components/Dashboard";
import AppLayout from "./components/Applayout";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
   
  );
}

const MainApp = () => {
  return (
    <div>
      <AppLayout>
      <Toaster
        position="top-right"
        gutter={8}
      />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:projectId" element={<Task />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;