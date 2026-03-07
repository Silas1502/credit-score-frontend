const API_URL = "https://credit-score-backend-05jy.onrender.com"

export async function submitLoan(data: any) {

  const payload = {
    income: Number(data.income),
    age: Number(data.age),
    employment_years: Number(data.employment_years),
    loan_amount: Number(data.loan_amount),
    loan_term: Number(data.loan_term),
    credit_history_length: Number(data.credit_history_length),
    num_credit_lines: Number(data.num_credit_lines),
    num_delinquencies: Number(data.num_delinquencies),
    debt_to_income_ratio: Number(data.debt_to_income_ratio),
    savings_balance: Number(data.savings_balance)
  }

  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  const result = await res.json()

  if (!res.ok) {
    console.error("API ERROR:", result)
    throw new Error(result?.detail?.[0]?.msg || "API error")
  }

  console.log("RESULT:", result)

  return result
}


export async function getApplications(page = 1, limit = 10) {

  try {
    const res = await fetch(
      `${API_URL}/applications?page=${page}&limit=${limit}`
    )

    if (!res.ok) {
      const text = await res.text()
      console.error("API ERROR:", text)
      throw new Error("Failed to fetch applications")
    }

    const data = await res.json()

    console.log("APPLICATIONS:", data)

    return data

  } catch (error) {
    console.error("FETCH ERROR:", error)
    throw error
  }

}