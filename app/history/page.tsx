"use client"

import { useEffect, useState } from "react"
import LoanTable from "@/components/LoanTable"
import { getApplications } from "@/services/api"
import Navbar from "@/components/Navbar"

type Application = {
  id: string
  approval_score: number
  approved: boolean
  risk_level: string
}

export default function HistoryPage() {

  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const [totalDB, setTotalDB] = useState(0)
  const [approvedDB, setApprovedDB] = useState(0)
  const [rejectedDB, setRejectedDB] = useState(0)
  const [avgScoreDB, setAvgScoreDB] = useState(0)

  useEffect(() => {

    async function fetchData() {
      try {

        const data = await getApplications(page, 10)

        console.log("API DATA:", data)

        if (data.items) {
          setApplications(data.items)

          setTotalDB(data.total)
          setApprovedDB(data.approved)
          setRejectedDB(data.total - data.approved)
          setAvgScoreDB(data.avg_score)
        }

      } catch (err) {
        console.error(err)
        alert("Không thể tải lịch sử")
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [page])

  const approvalRate =
    totalDB === 0
      ? 0
      : (approvedDB / totalDB) * 100

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Đang tải lịch sử...</p>
      </div>
    )

  return (
    <div>

      <Navbar />

      <div className="px-8 py-6">

        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Lịch sử hồ sơ vay
        </h1>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Tổng số hồ sơ
            </p>
            <p className="text-lg md:text-xl font-bold">
              {totalDB}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Tỷ lệ phê duyệt
            </p>
            <p className="text-lg md:text-xl font-bold">
              {Number(approvalRate || 0).toFixed(1)}%
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Được duyệt
            </p>
            <p className="text-lg md:text-xl font-bold text-green-600">
              {approvedDB}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Từ chối
            </p>
            <p className="text-lg md:text-xl font-bold text-red-600">
              {rejectedDB}
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Điểm trung bình
            </p>
            <p className="text-lg md:text-xl font-bold">
              {(avgScoreDB ?? 0).toFixed(2)}
            </p>
          </div>

        </div>

        {/* Table */}
        <LoanTable data={applications} />

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6 text-sm">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-2 py-1 md:px-4 md:py-2 border rounded disabled:opacity-40 hover:bg-gray-100"
          >
            Trước
          </button>

          <span className="px-2 md:px-3 py-1">
            Trang {page}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            className="px-2 py-1 md:px-4 md:py-2 border rounded hover:bg-gray-100"
          >
            Sau
          </button>

        </div>

      </div>

    </div>
  )
}