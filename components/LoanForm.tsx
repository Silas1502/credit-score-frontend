"use client";

import { useState } from "react";
import { submitLoan } from "../services/api";

type LoanFormType = {
  income: string;
  age: string;
  employment_years: string;
  loan_amount: string;
  loan_term: string;
  credit_history_length: string;
  num_credit_lines: string;
  num_delinquencies: string;
  debt_to_income_ratio: string;
  savings_balance: string;
};

export default function LoanForm({ setResult }: any) {

  const emptyForm: LoanFormType = {
    income: "",
    age: "",
    employment_years: "",
    loan_amount: "",
    loan_term: "",
    credit_history_length: "",
    num_credit_lines: "",
    num_delinquencies: "",
    debt_to_income_ratio: "",
    savings_balance: ""
  };

  const [loading, setLoading] = useState(false);
  const [useDemo, setUseDemo] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [form, setForm] = useState<LoanFormType>(emptyForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {

    const newErrors: any = {};

    const f = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [k, Number(v)])
    );

    if (f.income <= 0) newErrors.income = "Income must be greater than 0";

    if (f.age < 18 || f.age > 100)
      newErrors.age = "Age must be between 18 and 100";

    if (f.employment_years < 0 || f.employment_years > 60)
      newErrors.employment_years = "Employment years must be 0–60";

    if (f.loan_amount <= 0)
      newErrors.loan_amount = "Loan amount must be greater than 0";

    if (f.loan_term < 1 || f.loan_term > 360)
      newErrors.loan_term = "Loan term must be 1–360 months";

    if (f.credit_history_length < 0 || f.credit_history_length > 50)
      newErrors.credit_history_length = "Credit history length must be 0–50";

    if (f.num_credit_lines < 0 || f.num_credit_lines > 50)
      newErrors.num_credit_lines = "Credit lines must be 0–50";

    if (f.num_delinquencies < 0 || f.num_delinquencies > 20)
      newErrors.num_delinquencies = "Delinquencies must be 0–20";

    if (f.debt_to_income_ratio < 0 || f.debt_to_income_ratio > 1)
      newErrors.debt_to_income_ratio = "Debt-to-income ratio must be 0–1";

    if (f.savings_balance < 0)
      newErrors.savings_balance = "Savings balance must be ≥ 0";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {

      setLoading(true);

      const result = await submitLoan(form);

      setResult(result);

    } catch {

      alert("API error");

    } finally {

      setLoading(false);

    }

  };

  const fillDemo = (checked: boolean) => {

    if (checked) {

      setForm({
        income: "60000",
        age: "35",
        employment_years: "10",
        loan_amount: "15000",
        loan_term: "36",
        credit_history_length: "8",
        num_credit_lines: "4",
        num_delinquencies: "0",
        debt_to_income_ratio: "0.3",
        savings_balance: "20000"
      });

    } else {

      setForm(emptyForm);

    }

  };

  const clearForm = () => {

    setForm(emptyForm);
    setUseDemo(false);
    setErrors({});
    setResult(null);

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow"
    >

      {(Object.keys(form) as (keyof LoanFormType)[]).map((key) => (

        <div key={key} className="flex flex-col">

          <label
            htmlFor={key}
            className="text-sm text-gray-600 mb-1 capitalize"
          >
            {key.replaceAll("_", " ")}
          </label>

          <input
            id={key}
            type="number"
            name={key}
            value={form[key]}
            onChange={handleChange}
            required
            className={`border rounded p-2 focus:outline-none focus:ring-2 ${
              errors[key]
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-blue-500"
            }`}
          />

          {errors[key] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[key]}
            </p>
          )}

        </div>

      ))}

      <div className="md:col-span-2">

        {loading && (
          <p className="text-blue-500 mb-2">Processing prediction...</p>
        )}

        <div className="flex items-center gap-2 mb-3">

          <input
            id="demoData"
            type="checkbox"
            checked={useDemo}
            onChange={(e) => {
              const checked = e.target.checked;
              setUseDemo(checked);
              fillDemo(checked);
            }}
          />

          <label htmlFor="demoData" className="text-sm text-gray-600">
            Use Demo Data
          </label>

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <button
            type="button"
            onClick={clearForm}
            className="w-1/3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Clear Form
          </button>

          <button
            type="submit"
            className="w-2/3 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Predict Loan Risk
          </button>

        </div>

      </div>

    </form>

  );
}