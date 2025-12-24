import '../../../styles/sideBar.css'

export default function SliderBar(){

    const menuItems = [
        {
            id: 'home',
            label: 'Panel principal',
            icon: '',
            path: '',
        },
        {
            id: 'config',
            label: 'Configuración',
            icon: '',
            path: '',
            subItems: [
                { id: 'configGeneral', label: 'Configuración General',  path: ''},
                { id: 'aper', label: 'Apariencia', path: ''},
                { id: 'system', label: 'Sistema', path: ''}
            ]
        },
        {
            id: 'ligas',
            label: 'Gestión de Ligas',
            icon: '',
            path: '',
            subItems: [
                { id: 'adminLigas', label: 'Administrar Ligas',  path: ''},
                { id: 'crear', label: 'Crear Liga', path: ''},
                { id: 'configLiga', label: 'Configurar Liga', path: ''}
            ]
        },
        {
            id: 'equipos',
            label: 'Gestión de Equipos',
            icon: '',
            path: '',
            subItems: [
                { id: 'adminEquipos', label: 'Administrar Equipos',  path: ''},
                { id: 'crearEquipo', label: 'Crear Equipo', path: ''},
                { id: 'configEquipo', label: 'Configurar Equipo', path: ''}
            ]
        },
        {
            id: 'partidos',
            label: 'Gestión de Partidos',
            icon: '',
            path: '',
            subItems: [
                { id: 'adminPartidos', label: 'Administrar Partidos',  path: ''},
                { id: 'crearPartido', label: 'Crear Partido', path: ''},
                { id: 'ingresarResultados', label: 'Ingresar Resultados', path: ''},
            ]
        },
        {
            id: 'arbritos',
            label: 'Gestionar Arbritos',
            icon: '',
            path: '',
        },
        {
            id: 'user_roles',
            label: 'Usuarios y Roles',
            icon: '',
            path: '',
            subItems: [
                { id: 'gestionUsers', label: 'Gestionar Usuarios',  path: ''},
                { id: 'configRoles', label: 'Configurar Roles', path: ''},
                { id: 'gestionPermisos', label: 'Gestionar Permisos', path: ''},
            ]
        },
        {
            id: 'soporte_ayuda',
            label: 'Soporte y Ayuda',
            icon: '',
            path: '',
            subItems: [
                { id: 'preguntas', label: 'Preguntas Frecuentes',  path: ''},
                { id: 'tickets', label: 'Tickets de Soporte', path: ''},
            ]
        }
    ]

    return (
        <aside className='border max-h-screen flex flex-col'>
            <div className='p-4 text-center'>
                <h1 className='text-lg'>LIGA DE FUTBOL</h1>
            </div>
            
            <nav className='flex-1'>
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <p>{item.label}</p>
                        {item.subItems && (
                            <div className='border-l-2  ml-2 pl-2 py-1 text-sm overflow-auto'>
                                {item.subItems.map((subItem) => (
                                    <p key={subItem.id}>{subItem.label}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <div className='p-2 flex items-center justify-between'>
                <div>
                    <p className='text-sm'>VICTOR C.</p>
                    <p className='text-xs'>admin</p>
                </div>

                <p className='px-4 py-2 text-xs border rounded-2xl cursor-pointer'>SALIR</p>
            </div>
        </aside>
    )
}