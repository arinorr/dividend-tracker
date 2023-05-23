import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "./components/NavBar";

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
        <Outlet />
      </PageContainer>
    </AppContainer>
  );
};
