import { Route, Routes } from "react-router-dom";

import { BarChartPage } from "./BarChartPage";
import { ExamplesPage } from "./ExamplesPage";

const ExamplesRoute = () => {
  return (
    <Routes>
      <Route path="/" index element={<ExamplesPage />} />
      <Route path="BarChart" element={<BarChartPage />} />
    </Routes>
  );
};

export default ExamplesRoute;
