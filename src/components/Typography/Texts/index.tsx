import { Typography } from "antd";
const { Text } = Typography;

import {
  StyledTextCustom,
  StyledTextDefaultsourceSans,
  StyledDefaultText,
  StyParagraphPoppins,
} from "./styles";

import { TextProps } from "antd/lib/typography/Text";
import { ReactNode } from "react";

export type CustomColorProps = {
  children: ReactNode;
  color?: string;
  fontSize?: string;
  Ml?: string;
  Mr?: string;
  Mt?: string;
  fontWeight?: number;
};

export const TextDefaultPoppins = ({ children, ...rest }: CustomColorProps) => (
  <StyledDefaultText {...rest}>{children}</StyledDefaultText>
);

export const ParagraphPoppins = ({ children, ...rest }: CustomColorProps) => (
  <StyParagraphPoppins {...rest}>{children}</StyParagraphPoppins>
);

export const TextDefaultSourceSans = ({
  children,
  ...rest
}: CustomColorProps) => (
  <StyledTextDefaultsourceSans {...rest}>
    {children}
  </StyledTextDefaultsourceSans>
);

export const TextCustomColorSourceSans = ({
  children,
  ...rest
}: CustomColorProps) => (
  <StyledTextCustom {...rest}>{children}</StyledTextCustom>
);

export const TextAntd = ({ children, ...rest }: TextProps) => (
  <Text {...rest}>{children}</Text>
);
