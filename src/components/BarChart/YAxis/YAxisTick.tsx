type YAxisTickProps = {
  value: number;
  yOffset: number;
};

export const YAxisTick = ({ value, yOffset }: YAxisTickProps) => {

  return (
    <g className="tick" opacity="1"  transform={`translate(0, ${yOffset})`}>
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">{value}</text>
    </g>
  );
};
