import { ScaleLinear, axisLeft, select } from "d3";
import { useEffect, useRef } from "react";

type YAxisProps = {
  scale: ScaleLinear<number, number, never>;
  transform: string;
}

export const YAxis = ({ scale, transform }: YAxisProps) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}
