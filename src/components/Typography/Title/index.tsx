import { ReactNode } from "react";
import * as S from "./styles";

export type myTitleProps = {
  children: ReactNode;
  fontSize?: string;
  display?: string;
  margin?: string;
  padding?: string;
  color?: string;
  fontWeight?: string | number;
  textAlign?: string;
  lineHeight?: string;
};

export const Title = ({ children, ...rest }: myTitleProps) => (
  <S.StyledTitle {...rest}>{children}</S.StyledTitle>
);

export const SubTitle = ({ children, ...rest }: myTitleProps) => (
  <S.StyledTitleSubTitle {...rest}>{children}</S.StyledTitleSubTitle>
);

export const SubTitleMain = ({ children, ...rest }: myTitleProps) => (
  <S.SubTitleMain {...rest}>{children}</S.SubTitleMain>
);

export const SucessTitle = ({ children, ...rest }: myTitleProps) => (
  <S.StyledSucessTitle {...rest}>{children}</S.StyledSucessTitle>
);
