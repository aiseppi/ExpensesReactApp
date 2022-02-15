import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxTotal = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxTotal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
