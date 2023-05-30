import { arc as D3Arc, pie as D3Pie } from 'd3';

type PieData = {
  label: string;
  value: number;
};

type PieChartProps = {
  data: Array<PieData>;
  height?: number;
  width?: number;
  margin?: { top: number; right: number; bottom: number; left: number; };
};

export const PieChart = ({ data, height = 400, margin = { top: 0, right: 0, bottom: 0, left: 0 }, width = 500 }: PieChartProps) => {
  const pie = D3Pie<PieData>()
    .sort(null)
    .value(d => d.value);

  const arc = D3Arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1)
    .cornerRadius(15);
  
  const arcs = pie(data);

console.log('arc: ', arc);
console.log('arcs: ', arcs);

// svg.append("g")
//    .attr("stroke", "white")
//    .selectAll("path")
//    .data(arcs)
//    .enter().append("path")
//    .attr("fill", d => color(d.data.age))
//    .attr("d", arc)
//    .append("title")
//    .text(d => `${d.data.age}: ${d.data.population.toLocaleString()}`);

  return (
    <svg
      height={height + margin.top + margin.bottom}
      width={width + margin.left + margin.right}
    >
      <g
        transform={`translate(${width/2},${height/2})`}
      >

      </g>
    </svg>
  )
};
