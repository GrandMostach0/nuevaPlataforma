

function CardBienvenida({
    titleCard = "title",
    numero = "12",
    contenido = "valores here"
}){
    return (
        <div className="border border-gray-400 p-5 w-[300px] rounded-xl">
            <div className="flex items-center justify-between font-semibold">
                <p>{titleCard}</p>
                <p className="text-gray-500">Logo Here</p>
            </div>
            <p className="text-3xl font-bold my-1">{numero}</p>
            <p className="text-xs text-gray-500 font-semibold">{contenido}</p>
        </div>
    )
}

export default CardBienvenida;