import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-xs mx-auto">
            <form className="bg-[#020122] text-white rounded px-8 py-10 mb-8">
                <h2 className="mb-4 text-center text-2xl font-bold">Recuperar Contraseña</h2>
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
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-[#FDED00] hover:text-[#020122] text-white font-bold py-2 px-8 rounded focus:outline-none"
                        type="button"
                    >
                        Recuperar
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="mt-4 bg-blue-500 hover:bg-[#FDED00] hover:text-[#020122] text-white font-bold py-2 px-4 rounded focus:outline-none"
                        type="button"
                        onClick={() => navigate('/RegistroBrigada/login')}
                    >
                        Volver
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
