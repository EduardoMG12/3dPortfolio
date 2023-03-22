import React from "react";
import { Container, Section, LeftContent, RightContent } from "./styles";
import Form from "@components/Form";
import MapChart from "@components/MapChart";

const Contact: React.FC = () => {
  return (
    <Container id="ContactUs">
      <Section>
        <LeftContent>
          <Form />
        </LeftContent>
        <RightContent>
          <MapChart />
        </RightContent>
      </Section>
    </Container>
  );
};

export default Contact;
