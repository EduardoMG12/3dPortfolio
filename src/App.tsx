import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Who from "@components/Who";
import Works from "@components/Works";
import styled from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
