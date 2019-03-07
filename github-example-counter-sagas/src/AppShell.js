import React from "react";
import styled from "styled-components";

const TopBarHeight = "72px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
  margin-top: ${TopBarHeight};
`;

const TopBarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: ${TopBarHeight};
  z-index: 1;
  background: rgb(189, 31, 36);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  padding: 0 ${props => props.theme.baseline};
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
`;

const AppShell = ({ Content, TopBar }) => {
  return (
    <Container>
      <TopBarContainer>{TopBar ? <TopBar /> : null}</TopBarContainer>
      <Main>
        <ContentContainer>{Content ? <Content /> : null}</ContentContainer>
      </Main>
    </Container>
  );
};

export default AppShell;
