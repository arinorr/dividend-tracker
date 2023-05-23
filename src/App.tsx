import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppContainer, } from "./App.elements";
import { AppLayout } from "./AppLayout";
import { Loading } from "./components";

const Examples = lazy(() => import('./pages/Examples/ExamplesRoute'));
const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="examples/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Examples />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
