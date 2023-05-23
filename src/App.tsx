import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppLayout } from "./AppLayout";
import { Loading } from "./components";

const Examples = React.lazy(() => import('./pages/Examples/ExamplesRoute'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="examples/*"
            element={
              // TODO: this suspense is causing an error when naving back to home from examples, figure out why.
              <React.Suspense fallback={<Loading />}>
                <Examples />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
