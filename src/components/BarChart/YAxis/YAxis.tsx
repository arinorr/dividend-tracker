import { ScaleLinear, } from "d3";
import { useMemo, } from "react";
import { YAxisTick } from "./YAxisTick";

type YAxisProps = {
  scale: ScaleLinear<number, number, never>;
  transform: string;
}

export const YAxis = ({ scale, transform }: YAxisProps) => {
  const ticks = useMemo(() => {
    return scale.ticks()
      .map(value => ({
        value,
        yOffset: scale(value)
      }))
  }, [scale]);

  return (
    <g transform={transform} fill="none" font-size="10" font-family="sans-serif" text-anchor="end">
      <path className="domain" stroke="currentColor" d="M-6,536H0V0H-6" />
      {ticks.map(({ value, yOffset }, index) => {
        return (
          <YAxisTick key={`${value}${index}`} value={value} yOffset={yOffset} />
        );
      })}  
    </g>
  )
}
