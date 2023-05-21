import { scaleBand, scaleLinear } from "d3";
import { BarChartData } from "./BarChart.types";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { Bars } from "./Bars";

type BarChartProps = {
  data: Array<BarChartData>;
  height?: number;
  width?: number;
};

export const BarChart = ({
  data,
  height = 300,
  width = 500
}: BarChartProps) => {
  const labels = data.map(({ label }) => label);
  const values = data.map(({ value }) => value);

  // Our scale used to build the xAxis. For more info on scale functions see https://github.com/d3/d3-scale
  const scaleX = scaleBand()
    .domain(labels)
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain([0, Math.max(...values)])
    .range([height, 0]);

  return (
    <svg
      height={height}
      width={width}
    >
      <g transform={`translate(0, 0)`}>
        <XAxis scale={scaleX} transform={`translate(32, ${height - 32})`} />
        <YAxis scale={scaleY} transform={`translate(32, -32)`} />
        <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </svg>
  );
};
