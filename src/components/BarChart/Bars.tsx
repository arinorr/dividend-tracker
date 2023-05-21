import { ScaleBand, ScaleLinear } from "d3";
import { BarChartData } from "./BarChart.types";

type BarsProps = {
  data: Array<BarChartData>;
  height: number;
  scaleX: ScaleBand<string>;
  scaleY: ScaleLinear<number, number, never>;
}

export const Bars = ({ data, height, scaleX, scaleY }: BarsProps) => {
  return (
    <>
      {data.map(({ value, label }) => {
        const x = scaleX(label) || 0;
        const y = scaleY(value) || 0;

        return (
          <rect
            key={`bar-${label}`}
            x={x + 32}
            y={y - 32}
            width={scaleX.bandwidth()}
            height={height - scaleY(value)}
            fill="teal"
          />
        );
      })}
    </>
  );
}