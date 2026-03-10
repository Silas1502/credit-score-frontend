import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  DollarSign,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  CreditCard,
  Landmark
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Đánh Giá Rủi Ro Khoản Vay
            <span className="text-blue-600"> bằng AI</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            Đánh giá hồ sơ vay vốn ngay lập tức bằng mô hình học máy.
            Phân tích các chỉ số tài chính và dự đoán rủi ro phê duyệt
            khoản vay chỉ trong vài giây.
          </p>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <CreditCard size={20} />
            Bắt đầu đánh giá
          </Link>

        </div>


        {/* Loan Metrics Card */}

        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Landmark className="text-blue-600" />
            Các chỉ số đánh giá khoản vay
          </h3>

          <ul className="space-y-4 text-gray-600">

            <li className="flex items-center gap-3">
              <DollarSign className="text-green-500" />
              Thu nhập so với số tiền vay
            </li>

            <li className="flex items-center gap-3">
              <TrendingUp className="text-indigo-500" />
              Tỷ lệ nợ trên thu nhập
            </li>

            <li className="flex items-center gap-3">
              <CreditCard className="text-purple-500" />
              Thời gian lịch sử tín dụng
            </li>

            <li className="flex items-center gap-3">
              <ShieldCheck className="text-red-500" />
              Lịch sử trễ hạn thanh toán
            </li>

          </ul>

        </div>

      </section>



      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Tại sao nên sử dụng hệ thống AI của chúng tôi
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <BrainCircuit size={36} className="text-blue-600 mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Mô hình Machine Learning
            </h3>

            <p className="text-gray-600">
              AI phân tích dữ liệu tài chính để dự đoán rủi ro khoản vay
              bằng các thuật toán tiên tiến.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <TrendingUp size={36} className="text-green-600 mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Dự đoán rủi ro ngay lập tức
            </h3>

            <p className="text-gray-600">
              Nhận kết quả dự đoán ngay lập tức thông qua backend
              FastAPI được tích hợp.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <ShieldCheck size={36} className="text-indigo-600 mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Phân tích rủi ro tài chính
            </h3>

            <p className="text-gray-600">
              Hiểu rõ các chỉ số tài chính ảnh hưởng đến quyết định
              phê duyệt khoản vay.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}