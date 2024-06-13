import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-[#020122] text-white rounded px-8 py-10 mb-8">
        <h2 className="mb-4 text-center text-2xl font-bold">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="loginEmail">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />Correo
          </label>
          <input
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="loginEmail"
            type="email"
            placeholder="Correo"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="loginPassword">
            <FontAwesomeIcon icon={faLock} className="mr-2" />Contraseña
          </label>
          <div className="relative">
            <input
              className="appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
              id="loginPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-0 mr-4 mt-3 cursor-pointer text-[#020122]"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-[#FDED00] hover:text-[#020122] text-white font-bold py-2 px-8 rounded focus:outline-none"
            type="button"
            onClick={() => navigate('/RegistroBrigada/menu')}
          >
            Ingresar
          </button>
        </div>
        <p className="mt-6 text-center">
          ¿Olvidaste tu Contraseña?{' '}
          <button
            className="text-blue-500 hover:text-[#FDED00] focus:outline-none"
            onClick={() => navigate('/RegistroBrigada/changepassword')}
          >
            Recuperar
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
