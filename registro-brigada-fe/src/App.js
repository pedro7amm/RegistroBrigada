import React from 'react';
import Login from './components/login';
import ChangePassword from './components/changePassword';
import Menu from './components/menu';
import './styles/index.css';
import './styles/basicBackground.css';
import logo from './styles/images/LogoRegistroBrigada.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="custom-background min-h-screen bg-[#030228]">
        <header id="home" className="flex items-center justify-between p-3 bg-[#020122] text-white">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-16 mr-4" />
            <h1 className="text-xl sm:text-2xl font-bold">Registro Brigada</h1>
          </div>
          <nav className="relative">
            <ul className='lg:flex sm:space-x-4'>
              <li className="py-2 px-1 sm:py-0 sm:px-6">
                <a href="#footer" className="block text-sm sm:text-base hover:text-[#FDED00] font-bold">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />Contacto
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex items-center justify-center min-h-screen" id="home">
          <Routes>
            <Route path="/RegistroBrigada" element={<Navigate to="/RegistroBrigada/login" />} />
            <Route path="/RegistroBrigada/login" element={<Login />} />
            <Route path="/RegistroBrigada/changepassword" element={<ChangePassword />} />
            <Route path="/RegistroBrigada/menu" element={<Menu />} />
          </Routes>
        </div>
        <footer id="footer" className="bg-[#030228] text-white font-bold text-center py-5">
          <div className="container mx-auto flex flex-col md:flex-row items-center text-sm mb-3">
            <div className="flex-1 mb-4 md:mb-0">
              <p className='mb-2'>Registro Brigada</p>
              <p className='mb-2'>Independiente</p>
              <p className='mb-2'>V a0.1 - 06/2023</p>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <p className='mb-2'>P. Meléndez</p>
              <p className="mb-2 user-select-all">
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                pedrolendez7@gmail.com
              </p>
              <p className='mb-2'>Software Developer</p>
            </div>
          </div>
          <div className="mb-5 md:mb-5 text-xl">
            <a href="https://www.instagram.com/pedro7.amm/?hl=es-la" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDED00] mr-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/pedromelendezm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDED00] mr-4">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/pedro7amm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDED00] mr-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <p className="mt-2 text-sm">&copy; pedro7amm - 2024</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
