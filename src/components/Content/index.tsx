import React, { ReactNode } from "react";
import { Contents } from "./Contents";

interface IPropsContent {
  flex: string;
  textTitle: string;
  textSubtitle: string;
  textDesc: string;
  childrenButton: string | ReactNode;
}

const Content: React.FC<IPropsContent> = ({
  flex,
  textTitle,
  textSubtitle,
  textDesc,
  childrenButton,
}) => {
  return (
    <Contents.Root
      flex={flex}
      childrenContents={[
        <Contents.Title key="title" textTitle={textTitle} />,
        <Contents.WhatWe
          key="whatWe"
          childrenWhatWe={[
            <Contents.Line key="line" />,
            <Contents.Subtitle key="subtitle" textSubtitle={textSubtitle} />,
          ]}
        />,
        <Contents.Desc key="desc" textDesc={textDesc} />,
        <Contents.Button key="button" childrenButton={childrenButton} />,
      ]}
    />
  );
};

export default Content;
