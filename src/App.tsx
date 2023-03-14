import Contact from "@components/Contact"
import Hero from "@components/Hero"
import Who from "@components/Who"
import Works from "@components/Works"
import styled from "styled-components"
import background from '/public/images/background.jpeg'
import GlobalStyle from "@styles/GlobalStyle"

export const Container = styled.div`
  height:100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color:white;
  background: url(${background});
  &::-webkit-scrollbar{
    display: none;
  }
`;

const App: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </Container>
    </>
  )
}

export default App
