import styled, { createGlobalStyle } from "styled-components";
import LocationAPI from "./components/LocationAPI";

function App() {
  return (
    <>
      <GlobalStyle />
      <WelcomeContainer>
        <LocationAPI />
      </WelcomeContainer>
    </>
  );
}

export default App;

const WelcomeContainer = styled.div`
  height:100vh;
  width:100vw;
  display: flex;
  align-items:center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
