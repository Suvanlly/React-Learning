import React from "react";

import "./Chart.css";
import Chartbar from "./ChartBar";

const Chart = (props) => {
  // this will be an array of 12 values
  const dataPointValuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValuesArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
