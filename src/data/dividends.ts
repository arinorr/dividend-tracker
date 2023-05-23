export type DividendData = {
  label: string;
  value: number;
  date: Date;
  symbol: string;
};

export const DIVIDENDS: DividendData[] = [
  { date: new Date('2023-04-14'), symbol: "O", label: "Reality Income Corp", value: 7.39 },
  { date: new Date('2023-04-03'), symbol: "KO", label: "Coca-Cola", value: 0.50 },
  { date: new Date('2023-03-31'), symbol: "SPG", label: "Simon Property Group", value: 21.55 },
  { date: new Date('2023-03-29'), symbol: "VOO", label: "Vanguard 500 Index Fund ETF", value: 18.39 },
  { date: new Date('2023-03-29'), symbol: "VIG", label: "Vanguard Dividend Appreciation ETF", value: 0.78 },
  { date: new Date('2023-03-27'), symbol: "SCHD", label: "Schwab U.S Dividend Equity ETF", value: 1.32 },
  { date: new Date('2023-03-15'), symbol: "O", label: "Reality Income Corp", value: 7.37 },
  { date: new Date('2023-02-15'), symbol: "O", label: "Reality Income Corp", value: 7.20 },
  { date: new Date('2023-01-31'), symbol: "JPM", label: "JPMorgan Chase & Co", value: 0.52 },
  { date: new Date('2023-01-17'), symbol: "DIA", label: "SPDR Dow Jones Industrial Average ETF", value: 1.00 },
  { date: new Date('2023-01-13'), symbol: "O", label: "Reality Income Corp", value: 7.20 },
  { date: new Date('2023-01-12'), symbol: "TSM", label: "Taiwan Semiconductor", value: 0.24 },
  { date: new Date('2023-01-04'), symbol: "QQQ", label: "QQQ Invesco Trust ETF", value: 0.82 },
  { date: new Date('2022-12-30'), symbol: "SPG", label: "Simon Property Group", value: 21.55 },
  { date: new Date('2022-12-23'), symbol: "VOO", label: "Vanguard 500 Index Fund ETF", value: 10.56 },
  { date: new Date('2022-12-23'), symbol: "VIG", label: "Vanguard Dividend Appreciation ETF", value: 0.90 },
  { date: new Date('2022-12-22'), symbol: "NVDA", label: "NVIDIA", value: 0.02 },
  { date: new Date('2022-12-19'), symbol: "O", label: "Reality Income Corp", value: 7.19 },
  { date: new Date('2022-12-15'), symbol: "HD", label: "The Home Depot", value: 0.01 },
  { date: new Date('2022-12-15'), symbol: "KO", label: "Coca-Cola", value: 0.44 },
];
