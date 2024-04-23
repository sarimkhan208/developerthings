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
    <Navbar  />
    <div className='mt-[80px] ' >
    <MainRoute/>
    </div>
    </>
  );
}

export default App;
