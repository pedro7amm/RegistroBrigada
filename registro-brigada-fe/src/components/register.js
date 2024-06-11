import React from 'react';

const Register = ({ toggleForm }) => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-[#020122] text-white shadow-lg shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="mb-4 text-center text-2xl font-bold">Crear Cuenta</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerName">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="registerName"
            type="text"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerEmail">
            Correo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="registerEmail"
            type="email"
            placeholder="Correo"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="registerPassword">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="registerPassword"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Registrarse
          </button>
        </div>
        <p className="mt-4 text-center">
          ¿Ya tienes cuenta?{' '}
          <button
            className="text-green-500 hover:text-green-700 focus:outline-none"
            onClick={toggleForm}
          >
            Inicia Sesión
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;