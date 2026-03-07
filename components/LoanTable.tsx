export default function LoanTable({ data = [] }: any) {

  return (

    <div className="bg-white shadow-md rounded-xl overflow-x-auto mt-6">

      <table className="w-full min-w-[500px] table-fixed">

        <thead className="bg-gray-100 text-gray-700 text-xs md:text-sm uppercase">
          <tr>
            <th className="p-2 md:p-3 text-left w-120">ID</th>
            <th className="p-2 md:p-3 text-center">Score</th>
            <th className="p-2 md:p-3 text-center">Decision</th>
            <th className="p-2 md:p-3 text-center">Risk</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item: any) => (

            <tr key={item.id} className="border-t hover:bg-gray-50 transition">

              <td
                className="p-2 md:p-3 text-xs text-gray-600 text-left truncate"
                title={item.id}
              >
                {item.id}
              </td>

              <td className="p-2 md:p-3 w-40 md:w-48 text-center">

                <div className="flex items-center justify-center gap-2 md:gap-3">

                  <div className="w-full bg-gray-200 rounded-full h-2">

                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${(item.approval_score || 0) * 100}%`
                      }}
                    />

                  </div>

                  <span className="text-xs md:text-sm font-semibold">
                    {Number(item.approval_score || 0).toFixed(2)}
                  </span>

                </div>

              </td>

              <td className="p-2 md:p-3 text-center">

                <span
                  className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold
                  ${item.approved
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.approved ? "Approved" : "Rejected"}
                </span>

              </td>

              <td className="p-2 md:p-3 text-center">

                <span
                  className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    item.risk_level?.toLowerCase() === "low"
                      ? "bg-green-100 text-green-700"
                      : item.risk_level?.toLowerCase() === "medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.risk_level?.charAt(0).toUpperCase() + item.risk_level?.slice(1)}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}