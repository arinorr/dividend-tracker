import { ScaleBand, axisBottom, select } from "d3";
import { useEffect, useRef } from "react";

type XAxisProps = {
  scale: ScaleBand<string>;
  transform: string;
};

export const XAxis = ({
  scale,
  transform,
}: XAxisProps) => {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
};
