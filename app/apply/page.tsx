"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import LoanForm from "../../components/LoanForm";
import LoanResult from "../../components/LoanResult";

export default function ApplyPage() {

  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">

        <h1 className="text-4xl font-bold mb-10 text-gray-800">
          AI Loan Risk Prediction
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT - FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">
              Applicant Information
            </h2>

            <LoanForm setResult={setResult} />
          </div>

          {/* RIGHT - RESULT */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">

            <h2 className="text-xl font-semibold mb-4">
              Prediction Result
            </h2>

            {result ? (
              <LoanResult result={result} />
            ) : (
              <p className="text-gray-400">
                Submit the form to see prediction
              </p>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}