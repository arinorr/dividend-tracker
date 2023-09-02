import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "./components/NavBar";
import { Loading } from "./components/Loading";
import { Suspense } from "react";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const AppLayout = () => {
  return (
    <AppContainer>
      <NavBar />
      <PageContainer>
        <Suspense fallback={<Loading />} >
          <Outlet />
        </Suspense>
      </PageContainer>
    </AppContainer>
  );
};
