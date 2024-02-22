import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import './App.css';
import Navbar from './components/Navbar';
import MainRoute from './routes/MainRoute';

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      <Navbar/>
      <MainRoute/>
    </>
  );
}

export default App;
