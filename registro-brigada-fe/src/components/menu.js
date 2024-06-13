import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faListAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                <div className="bg-gray-800 text-white p-4 rounded flex flex-col items-center">
                    <div className="mb-4 flex items-center justify-center">
                        <FontAwesomeIcon icon={faAmbulance} className="text-4xl mr-2" />
                        <span className="ml-2 text-lg font-bold">Ingresar emergencia</span>
                    </div>
                    <Link to="/RegistroBrigada/ingresaremergencia" className="bg-blue-500 hover:bg-[#FDED00] hover:text-[#020122] text-white font-bold py-2 px-4 rounded focus:outline-none mb-4 w-full text-center">
                        Ir a Ingresar Emergencia
                    </Link>
                </div>
                <div className="bg-gray-800 text-white p-4 rounded flex flex-col items-center">
                    <div className="mb-4 flex items-center justify-center">
                        <FontAwesomeIcon icon={faListAlt} className="text-4xl mr-2" />
                        <span className="ml-2 text-lg font-bold">Ver registro de emergencias</span>
                    </div>
                    <Link to="/RegistroBrigada/registroemergencias" className="bg-blue-500 hover:bg-[#FDED00] hover:text-[#020122] text-white font-bold py-2 px-4 rounded focus:outline-none mb-4 w-full text-center">
                        Ir a Ver Registro de Emergencias
                    </Link>
                </div>
                <div className="bg-gray-800 text-white p-4 rounded flex flex-col items-center">
                    <div className="mb-4 flex items-center justify-center">
                        <FontAwesomeIcon icon={faUser} className="text-4xl mr-2" />
                        <span className="ml-2 text-lg font-bold">Perfil</span>
                    </div>
                    <Link to="/RegistroBrigada/perfil" className="bg-blue-500 hover:bg-[#FDED00] hover:text-[#020122] text-white font-bold py-2 px-4 rounded focus:outline-none mb-4 w-full text-center">
                        Ir a Perfil
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;
