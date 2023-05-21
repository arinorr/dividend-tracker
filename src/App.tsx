import { AppContainer, Sandbox } from "./App.elements";
import { BarChart, DIVIDENDS } from "./components";
import { DividendData } from "./components/BarChart/BarChart.types";
import { ValidMonthNumber, monthToString } from "./utils/date";

function App() {
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
    <AppContainer>
      <Sandbox>
        <BarChart data={finalDividendData} height={800} width={1600} />
      </Sandbox>
    </AppContainer>
  );
}

export default App;

