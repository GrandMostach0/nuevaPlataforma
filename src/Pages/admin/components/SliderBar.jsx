
import { useState } from 'react';
import '../../../styles/sideBar.css';

export default function SliderBar() {
    const [openMenu, setOpenMenu] = useState(null);
    
    const toggleMenu = (id) => {
        setOpenMenu(openMenu === id ? null : id);
    };
    
    const menuItems = [
        {
            id: 1,
            label: 'Dashboard',
            path: '/dashboard'
        },
        {
            id: 90,
            label: 'Configuración',
            subItems: [
                { id: 91, label: 'configuración general', path: '/admin/configuracion' },
                { id: 92, label: 'Apariencia', path: '/admin/apariencia' },
                { id: 93, label: 'Sistema', path: '/admin/sistema' }
            ]
        },
        {
            id: 2,
            label: 'Equipos',
            subItems: [
                { id: 21, label: 'Ver Equipos', path: '/equipos' },
                { id: 22, label: 'Crear Equipo', path: '/equipos/crear' },
                { id: 23, label: 'Estadísticas', path: '/equipos/estadisticas' }
            ]
        },
        {
            id: 3,
            label: 'Jugadores',
            subItems: [
                { id: 31, label: 'Ver Jugadores', path: '/jugadores' },
                { id: 32, label: 'Registrar Jugador', path: '/jugadores/registrar' },
                { id: 33, label: 'Transferencias', path: '/jugadores/transferencias' }
            ]
        },
        {
            id: 4,
            label: 'Partidos',
            subItems: [
                { id: 41, label: 'Calendario', path: '/partidos' },
                { id: 42, label: 'Resultados', path: '/partidos/resultados' },
                { id: 43, label: 'Programar Partido', path: '/partidos/programar' }
            ]
        },
        {
            id: 5,
            label: 'Clasificación',
            path: '/clasificacion'
        }
    ];
    
    return (
        <aside className='border h-screen w-64 flex flex-col bg-white shadow-lg'>
            <div className='p-4 text-center'>
                <h1 className='font-bold text-lg'>LIGA DE FUTBOL</h1>
            </div>
            
            <nav className='flex-1 overflow-y-auto p-2'>
                {menuItems.map((item) => (
                    <div key={item.id} className="mb-1">
                        <div 
                            onClick={() => item.subItems && toggleMenu(item.id)}
                            className={`p-3 rounded-lg cursor-pointer flex justify-between items-center transition-all duration-200 ${
                                openMenu === item.id 
                                    ? 'bg-blue-50 text-blue-700' 
                                    : 'hover:bg-gray-100 text-gray-700'
                            } ${!item.subItems ? 'hover:bg-blue-50' : ''}`}
                        >
                            <span className="font-medium">{item.label}</span>
                            {/* Icono de flecha con animación */}
                            {item.subItems && (
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        openMenu === item.id ? 'rotate-180' : ''
                                    }`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </div>
                        
                        {/* SubItems con animación de altura */}
                        {item.subItems && (
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openMenu === item.id 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className='border-l-2 border-blue-300 ml-4 pl-3 py-2 mt-1 flex flex-col gap-1'>
                                    {item.subItems.map((subItem) => (
                                        <a 
                                            key={subItem.id} 
                                            href={subItem.path}
                                            className="text-sm text-gray-600 hover:text-blue-600 py-2 px-2 rounded hover:bg-blue-50 transition-colors duration-150"
                                        >
                                            {subItem.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </nav>
            
            <div className='p-4 border-t flex items-center justify-between bg-gray-50'>
                <div>
                    <p className='text-sm font-bold uppercase text-gray-800'>Victor C.</p>
                    <p className='text-xs text-gray-500'>Administrador</p>
                </div>
                <button className='px-3 py-1 text-xs border border-red-200 text-red-600 rounded-full hover:bg-red-50 transition-colors font-medium'>
                    SALIR
                </button>
            </div>
        </aside>
    );
}