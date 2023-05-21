export type BarChartData = {
  label: string;
  value: number;
}

export type DividendData = {
  date: Date;
  symbol: string;
} & BarChartData;
