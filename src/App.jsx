import 'flowbite/dist/flowbite.css';
import React from 'react';
import MissionAndGoal from './pages/MissionAndGoal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashaboard from './pages/Dashaboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Blog from './pages/Blog';

import Contact from './pages/Contact';
import ChatComponent from './pages/ChatComponent';
import ServicesPage from './pages/ServicesPage';
import Contest from './pages/Contest/Contest';
import Footer from './components/Footer';



export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/service" element={<ServicesPage/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/dashboard' element={<Dashaboard />} />
        <Route path="/profile" element={<Profile />} />

        <Route path='login' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/mission-and-goal" element={<MissionAndGoal />} />

        <Route path="/chatAI" element={<ChatComponent />} />
        <Route path="/contest" element={<Contest/>}/>


        <Route path="/mission-and-goal" element={<MissionAndGoal />} />


      </Routes>
      <Footer />

    </BrowserRouter>
  )
}