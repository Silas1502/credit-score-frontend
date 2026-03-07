"use client"

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"

type Props = {
  score: number
  riskLevel: "Low" | "Medium" | "High"
}

export default function ScoreGauge({ score, riskLevel }: Props) {

  const percent = score * 100

  const color =
    riskLevel === "Low"
      ? "#22c55e"
      : riskLevel === "Medium"
      ? "#eab308"
      : "#ef4444"

  const data = [{ value: percent }]

  return (
    <div className="flex flex-col items-center">

      <RadialBarChart
        width={380}
        height={220}
        innerRadius="70%"
        outerRadius="100%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          tick={false}
        />

        <RadialBar
          background
          dataKey="value"
          fill={color}
          cornerRadius={40}
        />
      </RadialBarChart>

      {/* score */}
      <p
        className="text-6xl font-bold -mt-10"
        style={{ color }}
      >
        {percent.toFixed(1)}%
      </p>

    </div>
  )
}