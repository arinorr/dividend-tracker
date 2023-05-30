type XAxisTickProps = {
  value: string;
  x: number;
  y: number;
};

export const XAxisTick = ({ value, x, y, }: XAxisTickProps) => {
  const tickLineHeight = Math.max(1, y - 3);

  return (
    <g className="tick" opacity="1" transform={`translate(${x},0)`}>
      <line stroke="currentColor" y2={tickLineHeight} />
      <text fill="currentColor" y={y} dy="0.71em" textAnchor="middle">{value}</text>
    </g>
  )
};
