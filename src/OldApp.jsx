import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import P from "./ui/P";

const StyledApp = styled.div`
  background-color: pink;
  padding: 20px;
`;
const DivSt = styled.div`
  background-color: beige;
  padding: auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">Hello Wild</Heading>
            <div>
              <Heading type="h2">Check that out</Heading>
              <Button variation="primary" size="medium">
                Check In
              </Button>
              <Button variation="secondary" size="small">
                Check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="text" placeholder="Number of guests"></Input>
              <Input type="text" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
      <DivSt>
        <Button variation="danger" size="large">
          Omfoooo
        </Button>
      </DivSt>
      <P>
        hii, I am Om singh,hii, I am Om singh,hii, I am Om singh,hii, I am Om
        singh,hii, I am Om singh,hii, I am Om singh,hii, I am Om singh,hii, I am
        Om singh,hii, I am Om singh,hii, I am Om singh,
      </P>
    </>
  );
};

export default App;
