
function CardInfo(){
    return(
        <section className="border p-3 min-w-[200px] rounded-lg">
            <span className="text-sm">encabezado</span>

            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Titulo</p>
                <p>Logo</p>
            </div>

            <span className="text-sm">pie de página</span>
        </section>
    )
}

export default CardInfo;