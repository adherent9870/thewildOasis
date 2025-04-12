import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #e47373;
`;

const Header = styled.header`
  width: 100%;
  background-color: #6c63ff;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
`;

const Content = styled.main`
  flex: 1;
  width: 100%;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #4b92e3;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  return (
    <Main>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Main>
  );
};

export default Home;
