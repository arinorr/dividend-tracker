import { scaleBand, scaleLinear } from "d3";
import { BarChartData } from "./BarChart.types";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis/YAxis";
import { Bars } from "./Bars";
import styled, { css } from "styled-components";

type BarChartProps = {
  data: Array<BarChartData>;
  height?: number;
  padding?: { top: number; right: number; bottom: number; left: number; };
  margin?: { top: number; right: number; bottom: number; left: number; };
  width?: number;
};

const StyledSVG = styled.svg<{
  border?: string;
  margin: string;
  padding: string
}>(({ border, margin, padding }) => css`
  border: ${border ? border : "none"};
  padding: ${padding};
  margin: ${margin};
`);

export const BarChart = ({
  data,
  height = 300,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  padding = { top: 32, right: 32, bottom: 32, left: 32 },
  width = 500,
}: BarChartProps) => {
  const labels = data.map(({ label }) => label);
  const values = data.map(({ value }) => value);

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  // Our scale used to build the xAxis. For more info on scale functions see https://github.com/d3/d3-scale
  const scaleX = scaleBand()
    .domain(labels)
    .range([0, chartWidth]);

  const scaleY = scaleLinear()
    .domain([0, Math.max(...values)])
    .range([chartHeight, 0]);

  return (
    <StyledSVG
      height={height}
      margin={`${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`}
      padding={`${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`}
      preserveAspectRatio="xMidYMid"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
    >
      <g transform={`translate(0, ${padding.top})`}>
        <XAxis scale={scaleX} transform={`translate(${padding.left}, ${chartHeight})`} />
        <YAxis scale={scaleY} transform={`translate(${padding.left}, -0)`} />
        <Bars data={data} height={chartHeight} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </StyledSVG>
  );
};
