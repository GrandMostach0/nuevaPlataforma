export default function CardLiga() {
    return (
        <div className="border border-slate-400 rounded-lg overflow-hidden">
            <div className="h-40 bg-slate-300">

            </div>

            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-semibold">Primera División</span>
                    <span className="text-black border p-1 rounded-xl text-xs">Temporada 2025</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Temporada</span>
                    <span className="text-black">Temporada 2025</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Equipos</span>
                    <span className="text-black">12</span>
                </div>

                <button className="border w-full py-1 bg-black text-white rounded-lg">Ver Liga</button>

            </div>
        </div>
    )
}