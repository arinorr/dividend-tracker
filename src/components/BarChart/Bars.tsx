import { ScaleBand, ScaleLinear } from "d3";
import { BarChartData } from "./BarChart.types";
import styled, { css } from "styled-components";

type ColorConfig = {
  border: string;
  fill: string;
  hover: string;
};

type BarsProps = {
  colors?: ColorConfig;
  data: Array<BarChartData>;
  height: number;
  scaleX: ScaleBand<string>;
  scaleY: ScaleLinear<number, number, never>;
}

const StyledBar = styled.rect<{ colors: ColorConfig }>((props) => css`
  &:hover {
    fill: ${props.colors.hover};
    stroke: ${props.colors.border};
    stroke-width: 2px;
  }
`);

export const Bars = ({
  colors={ border: "#2587be", fill: "#2596be", hover: "#25a5be" },
  data,
  height,
  scaleX,
  scaleY
}: BarsProps) => {
  return (
    <>
      {data.map(({ value, label }) => {
        const x = scaleX(label) || 0;
        const y = scaleY(value) || 0;

        return (
          <StyledBar
            colors={colors}
            key={`bar-${label}`}
            x={x + 32}
            y={y}
            width={scaleX.bandwidth() - 2}
            height={height - scaleY(value)}
            fill={colors.fill}
          />
        );
      })}
    </>
  );
}