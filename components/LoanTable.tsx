export default function LoanTable({ data = [] }: any) {

  return (

    <div className="bg-white shadow-md rounded-xl overflow-x-auto mt-6">

      <table className="w-full min-w-[900px] table-fixed">

        <thead className="bg-gray-100 text-gray-700 text-xs md:text-sm uppercase">
          <tr>
            <th className="p-2 md:p-3 text-left">ID</th>
            <th className="p-2 md:p-3 text-center">Tuổi</th>
            <th className="p-2 md:p-3 text-center">Thu nhập</th>
            <th className="p-2 md:p-3 text-center">Khoản vay</th>
            <th className="p-2 md:p-3 text-center">Score</th>
            <th className="p-2 md:p-3 text-center">Quyết định</th>
            <th className="p-2 md:p-3 text-center">Risk</th>
            <th className="p-2 md:p-3 text-center">Thời gian</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item: any) => {

            const input = item.input_data || {}

            const income = Number(input.income || 0).toLocaleString("vi-VN")
            const loan = Number(input.loan_amount || 0).toLocaleString("vi-VN")

            const score = Number(item.approval_score || 0)

            /* -------- Risk logic (tính từ score) -------- */

            let riskLabel = "Cao"
            let riskStyle = "bg-red-100 text-red-700"

            if (score >= 0.8) {
              riskLabel = "Thấp"
              riskStyle = "bg-green-100 text-green-700"
            } else if (score >= 0.5) {
              riskLabel = "Trung bình"
              riskStyle = "bg-yellow-100 text-yellow-700"
            }

            /* -------- Time -------- */

            const date = new Date(item.created_at + "Z")

            const time = date.toLocaleString("vi-VN", {
              timeZone: "Asia/Ho_Chi_Minh",
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric"
            })

            return (

              <tr key={item.id} className="border-t hover:bg-gray-50 transition">

                {/* ID */}
                <td
                  className="p-2 md:p-3 text-xs text-gray-600 text-left truncate"
                  title={item.id}
                >
                  {item.id}
                </td>

                {/* Age */}
                <td className="p-2 md:p-3 text-center">
                  {input.age}
                </td>

                {/* Income */}
                <td className="p-2 md:p-3 text-center">
                  {income}
                </td>

                {/* Loan */}
                <td className="p-2 md:p-3 text-center">
                  {loan}
                </td>

                {/* Score */}
                <td className="p-2 md:p-3 text-center font-semibold text-black">
                  {(score * 100).toFixed(2)}%
                </td>

                {/* Decision */}
                <td className="p-2 md:p-3 text-center">

                  <span
                    className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold
                    ${item.approved
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.approved ? "Được duyệt" : "Từ chối"}
                  </span>

                </td>

                {/* Risk */}
                <td className="p-2 md:p-3 text-center">

                  <span
                    className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${riskStyle}`}
                  >
                    {riskLabel}
                  </span>

                </td>

                {/* Time */}
                <td className="p-2 md:p-3 text-center text-xs text-gray-600">
                  {time}
                </td>

              </tr>

            )

          })}

        </tbody>

      </table>

    </div>

  )

}