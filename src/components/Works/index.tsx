import React, { useState } from "react";
import CanvasTemplate from "./components/CanvasTemplate";
import Cloud from "./components/models3d/Cloud";
import Coffee from "./components/models3d/Coffee";
import JavaLogo from "./components/models3d/JavaLogo";
import NotebookLayout from "./components/models3d/NotebookLayout";
import PictureWave from "./components/models3d/PictureWave";
import ReactIcon from "./components/models3d/ReactIcon";

import {
  Container,
  LeftContent,
  List,
  ListItem,
  RightContent,
  Section,
} from "./styles";

const data = [
  "Web Design",
  "Main skill",
  "Secondary skill",
  "Social midias",
  // React
  // TS
  // Java
  // Next
];

export interface IPropsListItem {
  text?: string;
}

const Works: React.FC = () => {
  const [model3d, setModel3d] = useState("Picture");

  const randomBoolean: boolean = Math.random() >= 0.5;

  const positionTexts = () => {
    switch (model3d) {
      case "Web Design":
        return 1;
      case "Main skill":
        return 2;
      case "Secondary skill":
        return randomBoolean ? 3 : 4;
      case "Social midias":
        return 5;
      default:
        return null; // ou um valor padrão adequado para o seu caso
    }
  };

  const renderWebDesign = () => {
    return (
      <p>
        Web prototyping with Figma, UI and UX Design: I use UI and UX Design
        techniques to create intuitive and user-friendly interfaces that meet
        the needs and expectations of users. I always strive to follow best
        design practices, such as color selection, typography, and screen
        layout, to create beautiful and functional interfaces.
      </p>
    );
  };

  const renderMainSkill = () => {
    return (
      <p>
        My main skill is developing with React and TypeScript, using
        object-oriented programming concepts and design patterns to create
        scalable and easily maintainable applications. I'm currently studying
        the Next.js framework, which allows for creating web applications in
        React with support for server-side rendering, route management,
        performance optimization, and other features. I always strive to follow
        best development practices, such as automated testing, documentation,
        code versioning, to ensure the quality and security of the developed
        applications.
      </p>
    );
  };

  const renderSecondarySkill = () => {
    return (
      <p>
        I also have skills in Java, one of the most widely used programming
        languages in the corporate world. Although my main focus is on web
        development, I have experience developing applications with Java, using
        the SpringBoot framework. I am always looking to improve my Java skills,
        whether through self-study or specialized courses, in order to meet the
        needs and demands of future projects that may arise.
      </p>
    );
  };

  const renderEasterEgg = () => {
    return <p>Is this an easter egg?!</p>;
  };

  const renderSocialMedia = () => {
    return (
      <p>
        My social media and other contact methods are linked:
        <a href="https://beacons.ai/charlesmellog" target={"_blank"}>
          here
        </a>
      </p>
    );
  };

  const descriptionAndText3dModel = () => {
    switch (model3d) {
      case "Web Design":
        return renderWebDesign();
      case "Main skill":
        return renderMainSkill();
      case "Secondary skill":
        return randomBoolean ? renderSecondarySkill() : renderEasterEgg();
      case "Social midias":
        return renderSocialMedia();
      default:
        return null;
    }
  };
  return (
    <Container>
      <Section>
        <LeftContent>
          <List>
            {data.map((itemName) => {
              return (
                <ListItem
                  text={itemName}
                  key={itemName}
                  onClick={() => setModel3d(itemName)}
                >
                  {itemName}
                </ListItem>
              );
            })}
          </List>
        </LeftContent>
        <RightContent>
          <CanvasTemplate
            textDesc={descriptionAndText3dModel()}
            position={positionTexts()}
          >
            <>
              {model3d === "Web Design" ? (
                <NotebookLayout />
              ) : model3d === "Main skill" ? (
                <ReactIcon />
              ) : model3d === "Secondary skill" && randomBoolean === true ? (
                <JavaLogo />
              ) : model3d === "Secondary skill" && randomBoolean === false ? (
                <Coffee />
              ) : model3d === "Social midias" ? (
                <Cloud />
              ) : (
                <PictureWave />
              )}
            </>
          </CanvasTemplate>
        </RightContent>
        return
      </Section>
    </Container>
  );
};

export default Works;
