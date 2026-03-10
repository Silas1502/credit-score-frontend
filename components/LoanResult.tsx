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

  const riskText =
    result.risk_level === "Low"
      ? "Thấp"
      : result.risk_level === "Medium"
      ? "Trung bình"
      : "Cao";

  return (

    <div className="space-y-4">

      <div className="text-center">

        <p className="text-gray-500">Điểm phê duyệt</p>

        {/* Gauge */}
        <div className="flex justify-center mb-3">
          <ScoreGauge
            score={result.approval_score}
            riskLevel={result.risk_level}
          />
        </div>

      </div>

      <div className="flex justify-between border-t pt-4">

        <span className="font-medium">Kết quả</span>

        <span className="font-semibold">
          {result.approved ? "Được duyệt" : "Từ chối"}
        </span>

      </div>

      <div className="flex justify-between">

        <span className="font-medium">Mức rủi ro</span>

        <span className={`font-semibold ${color}`}>
          {riskText}
        </span>

      </div>

      <div className="border-t pt-4 text-gray-600">
      {result.recommendation === "Loan likely safe to approve."
        ? "Khoản vay có khả năng được phê duyệt an toàn."
        : result.recommendation === "Review application before approval."
        ? "Cần xem xét thêm trước khi phê duyệt."
        : "Rủi ro cao, không nên phê duyệt."}
      </div>

    </div>

  );
}