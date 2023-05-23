type PieChartProps = {
  height?: number;
  width?: number;
};

export const PieChart = ({ height = 400, width = 500 }: PieChartProps) => {
  const radius = 200; // TODO: this should be calulated based off height and width

  return (
    <svg
      height={height}
      width={width}
    >

    </svg>
  )
};
