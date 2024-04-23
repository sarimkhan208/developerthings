import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import './App.css';
import Navbar from './components/Navbar';
import MainRoute from './routes/MainRoute';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
    <Navbar  />
    <div className='mt-[80px] ' >
    <MainRoute/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
