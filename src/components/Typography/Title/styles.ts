import styled from "styled-components";

import { myTitleProps } from ".";

export const StyledTitle = styled.h1<myTitleProps>`
  font-size: ${({ fontSize }) => fontSize || "1em"};
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  color: ${({ color, theme }) => color || theme.COLORS.NEUTRAL_COLORS.BLACK};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight || "30px"};
`;

export const StyledTitleSubTitle = styled.span<myTitleProps>`
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-family: ${({ theme }) => theme.FONTS.MAIN}, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color, theme }) => color || theme.COLORS.NEUTRAL_COLORS.WHITE};
  opacity: 1;
`;

export const SubTitleMain = styled(StyledTitleSubTitle)`
  color: ${({ color, theme }) => color || theme.COLORS.NEUTRAL_COLORS.DARKEST};
`;

export const StyledSucessTitle = styled(StyledTitleSubTitle)`
  color: ${({ theme }) => theme.COLORS.SIGNAL_COLORS.SUCESS};
`;
