import React, { ReactNode } from 'react';
import { ButtonLearn, ContentsText, FirstTitle, ImageLine, Paragraph, Secondtitle, WhatWeDoOrAre } from './styles';
import line from '@images/line.png'

export interface IPropsContents {
    childrenContents?: ReactNode[]
    flex?: string
}

const Root: React.FC<IPropsContents> = ({ childrenContents, flex }) => {
    return (
        <ContentsText flex={flex}>
            {childrenContents}
        </ContentsText>
    )
}
Root.displayName = 'Contents.Root';


interface IPropsTitle {
    textTitle: string
}

const Title: React.FC<IPropsTitle> = ({ textTitle }) => <FirstTitle>{textTitle}</FirstTitle>

Title.displayName = 'Contents.Title';


interface IPropsWhatWe {
    childrenWhatWe: ReactNode[]
}

const WhatWe: React.FC<IPropsWhatWe> = ({ childrenWhatWe }) => {
    return (
        <WhatWeDoOrAre>
            {childrenWhatWe}
        </WhatWeDoOrAre>

    );
}
WhatWe.displayName = 'Contents.WhatWe';


const Line: React.FC = ({ }) => <ImageLine src={line} />;

Line.displayName = 'Contents.Line';


interface IPropsSubtitle {
    textSubtitle: string
}

const Subtitle: React.FC<IPropsSubtitle> = ({ textSubtitle }) => <Secondtitle>{textSubtitle}</Secondtitle>;

Subtitle.displayName = 'Contents.Subtitle';


interface IPropsDesc {
    textDesc: string
}

const Desc: React.FC<IPropsDesc> = ({ textDesc }) => <Paragraph>{textDesc}</Paragraph>;

Desc.displayName = 'Contents.Desc';


export interface IPropsButton {
    childrenButton: ReactNode | string
    typeButton?: number
}

const Button: React.FC<IPropsButton> = ({ childrenButton, typeButton }) => <ButtonLearn typeButton={typeButton}>{childrenButton}</ButtonLearn>;

Button.displayName = 'Contents.Button';


export const Contents = {
    Root,
    WhatWe,
    Title,
    Line,
    Subtitle,
    Desc,
    Button
}