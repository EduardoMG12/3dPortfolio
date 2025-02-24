import React, { useState } from "react";
import CanvasTemplate from "./components/CanvasTemplate";
import Cloud from "./components/models3d/Cloud";
import JavaLogo from "./components/models3d/JavaLogo";
import NotebookLayout from "./components/models3d/NotebookLayout";
import { OfficeDrawer } from "./components/models3d/OfficeDrawer";
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
    "Documentation",
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
            case "Documentation":
                return 6;
            default:
                return null; // ou um valor padrão adequado para o seu caso
        }
    };

    const renderWebDesign = () => {
        return (
            <p>
              We create modern and responsive interfaces for your website.
            </p>
        );
    };

    const renderMainSkill = () => {
        return (
            <p>
                Our core expertise is web development, Typescript, React, Next, NestJs.
            </p>
        );
    };

    const renderSecondarySkill = () => {
        return (
            <p>
                Other skills include Java, Spring, Figma, Python, FastAPI, and more.
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
                <a href="https://beaconsai.com/charlesmellog" target={"_blank"}>
                    here
                </a>
            </p>
        );
    };

    const renderDocumentation = () => {
        return (
            <p>
                The project documentation and my github:
                <a href="https://github.com/EduardoMG12/3dPortfolio" target={"_blank"}>
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
                return renderSecondarySkill();
            case "Social midias":
                return renderSocialMedia();
            case "Documentation":
                return renderDocumentation();
            default:
                return null;
        }
    };
    return (
        <Container id="Works">
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
                            ) : model3d === "Secondary skill" ? (
                                <JavaLogo />
                            ) : model3d === "Social midias" ? (
                                <Cloud />
                            ) : model3d === "Documentation" ? (
                                <OfficeDrawer />
                            ) : (
                                <PictureWave />
                            )}
                        </>
                    </CanvasTemplate>
                </RightContent>
            </Section>
        </Container>
    );
};

export default Works;
