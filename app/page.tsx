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
            AI Loan Risk
            <span className="text-blue-600"> Assessment</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            Evaluate loan applications instantly using machine learning.
            Analyze financial metrics and predict the risk of loan approval
            in seconds.
          </p>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <CreditCard size={20} />
            Start Assessment
          </Link>

        </div>


        {/* Loan Metrics Card */}

        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Landmark className="text-blue-600" />
            Loan Evaluation Metrics
          </h3>

          <ul className="space-y-4 text-gray-600">

            <li className="flex items-center gap-3">
              <DollarSign className="text-green-500" />
              Income vs Loan Amount
            </li>

            <li className="flex items-center gap-3">
              <TrendingUp className="text-indigo-500" />
              Debt to Income Ratio
            </li>

            <li className="flex items-center gap-3">
              <CreditCard className="text-purple-500" />
              Credit History Length
            </li>

            <li className="flex items-center gap-3">
              <ShieldCheck className="text-red-500" />
              Delinquencies
            </li>

          </ul>

        </div>

      </section>



      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use Our AI System
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <BrainCircuit size={36} className="text-blue-600 mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Machine Learning Model
            </h3>

            <p className="text-gray-600">
              Our AI analyzes financial data to predict loan risk with
              advanced algorithms.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <TrendingUp size={36} className="text-green-600 mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Instant Risk Prediction
            </h3>

            <p className="text-gray-600">
              Receive predictions immediately through our integrated
              FastAPI backend.
            </p>

          </div>


          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <ShieldCheck size={36} className="text-indigo-600 mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Financial Risk Insights
            </h3>

            <p className="text-gray-600">
              Understand the financial indicators that influence loan
              approval decisions.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}