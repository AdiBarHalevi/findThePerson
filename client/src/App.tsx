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
  height: 100vh;
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Yomogi", cursive, Arial, Helvetica, sans-serif;
  }
`;
