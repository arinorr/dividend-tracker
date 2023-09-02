import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppLayout = lazy(() => import("./AppLayout").then((module) => ({ default: module.AppLayout })));
const BarChartPage = lazy(() => import("./pages/BarChartPage").then((module) => ({ default: module.BarChartPage })));
const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>Loading ...</>}>
              <AppLayout />
            </Suspense>
          }
        >
          <Route index element={<Suspense fallback={<>Loading ...</>}><HomePage /></Suspense>} />
          <Route path="BarChart" element={<Suspense fallback={<>Loading ...</>}><BarChartPage /></Suspense>} />
          {/* <Route path="PieChart" element={<PieChartPage />} /> */}
          {/* <Route path="dividends" /> */}
          <Route path="*" element={<Suspense fallback={<>Loading ...</>}><NotFoundPage /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
