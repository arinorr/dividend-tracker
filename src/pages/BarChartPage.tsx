import styled from "styled-components";

import { BarChart } from "../components/BarChart";
import { DIVIDENDS, DividendData } from "../data/dividends";
import { ValidMonthNumber, monthToString } from "../utils/date";

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%
`;

export const BarChartPage = () => {
  // Group our data by month, eventually we'll want a better/more customizable way of grouping the data.
  const dataByMonth = DIVIDENDS.reduce((data, current) => {
    const month = monthToString(current.date.getMonth() as ValidMonthNumber);
    const monthData = data[month];

    if (monthData) {
      monthData.push(current);
    }

    return data;
  }, {
    'January': [],
    'February': [],
    'March': [],
    'April': [],
    'May': [],
    'June': [],
    'July': [],
    'August': [],
    'September': [],
    'October': [],
    'November': [],
    'December': []
  } as Record<string, Array<DividendData>>);
  
  const finalDividendData = Object.keys(dataByMonth).map((key) => {
    const value = dataByMonth[key].reduce((total, current) => total += current.value, 0);
    return ({ label: key, value, });
  });
  
  return (
    <StyledContainer>
      <BarChart data={finalDividendData} height={600} width={1000} />
    </StyledContainer>
  );
};
