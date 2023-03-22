import React from "react";
import logoSVG from "@images/Logo.svg";
import searchIcon from "@images/search.png";
import {
  Header,
  Icon,
  Icons,
  Links,
  List,
  ListItem,
  Logo,
  Button,
  Container,
} from "./styles";

const NavBar: React.FC = () => {
  return (
    <Header>
      <Container>
        <Links>
          <Logo src={logoSVG} />
          <List>
            <ListItem>
              <a href="#Hero">Home</a>
            </ListItem>
            <ListItem>
              <a href="#Studio">Studio</a>
            </ListItem>
            <ListItem>
              <a href="#Works">Works</a>
            </ListItem>
            <ListItem>
              <a href="#ContactUs">Contact</a>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src={searchIcon} />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Header>
  );
};

export default NavBar;
