function FooterBar(){
    return(
        <>
        <footer className="border border-gray-300 flex justify-between text-gray-600 text-sm p-5">

            <div>
                <h1 className="font-semibold text-base text-black">Liga de Fútbol</h1>
                <p>Promoviendo el deporte y los valores del fútbol desde 2010.</p>
            </div>

            <div>
                <h1 className="font-semibold text-base text-black">Competiciones</h1>
                <p>Fútbol Mayor</p>
                <p>Fútbol Infantil</p>
                <p>Fútbol Juvenil</p>
                <p>Fútbol Femenil</p>
            </div>

            <div>
                <h1 className="font-semibold text-base text-black">Enlaces</h1>
                <p>Calendario</p>
                <p>Galería</p>
                <p>Documentos</p>
            </div>

            <div>
                <h1 className="font-semibold text-base text-black">Contacto</h1>
                <p>Estadio Municipal, Calle Principal 123</p>
                <p>info@ligadefutbol.com</p>
                <p>+123 456 7890</p>
            </div>

        </footer>

        <div className="flex justify-between p-4 text-gray-400 text-xs">
            <p>© 2025 Liga de Fútbol. Todos los derechos reservados</p>

            <div>
                <p className="inline-block ml-4">Términos</p>
                <p className="inline-block ml-4">Privacidad</p>
                <p className="inline-block ml-4">Cookies</p>
            </div>
        </div>
        </>
    )
}

export default FooterBar;