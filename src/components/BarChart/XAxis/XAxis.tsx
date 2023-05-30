import { ScaleBand, } from "d3";

import { XAxisTick, } from "./XAxisTick";

type XAxisProps = {
  scale: ScaleBand<string>;
  transform: string;
};

export const XAxis = ({
  scale,
  transform,
}: XAxisProps) => {  
  const domain = scale.domain();
  const bandWidth = scale.bandwidth(); // width of each band/tick of the x axis
  const halfBandWidth = bandWidth / 2;

  // TODO: this probably needs to account for padding.
  const axisWidth = bandWidth * domain.length; // length of the entire xAxis

  return (
    <g transform={transform}>
      <line className="domain" x1="0" x2={axisWidth} stroke="currentColor" strokeWidth={1} />
      {domain.map((value, index) => {
        const xChord = halfBandWidth + (index * bandWidth);

        return (
          <XAxisTick key={`value${index}`} value={value} x={xChord} y={10} />
        );
      })}
    </g>
  );
};
