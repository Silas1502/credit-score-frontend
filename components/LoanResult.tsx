type Props = {
  result: any;
};

import ScoreGauge from "./ScoreGauge";

export default function LoanResult({ result }: Props) {

  const score = (result.approval_score * 100).toFixed(1);

  const color =
    result.risk_level === "Low"
      ? "text-green-600"
      : result.risk_level === "Medium"
      ? "text-yellow-500"
      : "text-red-600";

  return (

    <div className="space-y-4">

      <div className="text-center">

        <p className="text-gray-500">Approval Score</p>

        {/* ✅ Gauge đặt ở đây */}
        <div className="flex justify-center mb-3">
          <ScoreGauge
            score={result.approval_score}
            riskLevel={result.risk_level}
            />
        </div>

        {/* <p className="text-4xl font-bold text-blue-600">
          {score}%
        </p> */}

      </div>

      <div className="flex justify-between border-t pt-4">

        <span className="font-medium">Decision</span>

        <span className="font-semibold">
          {result.approved ? "Approved" : "Rejected"}
        </span>

      </div>

      <div className="flex justify-between">

        <span className="font-medium">Risk Level</span>

        <span className={`font-semibold ${color}`}>
          {result.risk_level}
        </span>

      </div>

      <div className="border-t pt-4 text-gray-600">
        {result.recommendation}
      </div>

    </div>

  );
}

