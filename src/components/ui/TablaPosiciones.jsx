export default function TablaPosiciones(){
    return(
        <table className="border w-full">
            <thead className="text-gray-400 text-left">
                <tr className="border border-gray-400">
                    <th className="p-2 font-semibold">Pos</th>
                    <th className="font-semibold">Equipo</th>
                    <th className="font-semibold">PJ</th>
                    <th className="font-semibold">Pts</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border border-gray-400">
                    <td className="p-3">1</td>
                    <td><a href="/">Deportivo Águilas</a></td>
                    <td>20</td>
                    <td className="font-semibold">41</td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-3">1</td>
                    <td>Deportivo Águilas</td>
                    <td>20</td>
                    <td className="font-semibold">41</td>
                </tr>
                <tr className="border border-gray-400"   >
                    <td className="p-3">1</td>
                    <td>Deportivo Águilas</td>
                    <td>20</td>
                    <td className="font-semibold">41</td>
                </tr>
            </tbody>
        </table>
    )
}