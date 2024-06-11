import styled from "styled-components";

import { CustomColorProps } from ".";

export const StyledDefaultText = styled.span<CustomColorProps>`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  font-size: ${({ fontSize }) => fontSize || 12 + "px"};
  color: ${({ theme, color }) => color || theme.COLORS.NEUTRAL_COLORS.DARKEST};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  margin-left: ${({ Ml }) => Ml};
  margin-right: ${({ Mr }) => Mr};
  margin-top: ${({ Mt }) => Mt};
`;

export const StyledTextCustom = styled.span<CustomColorProps>`
  color: ${({ color }) => color || "#646162"};
  font-family: ${({ theme }) => theme.FONTS.SANS_PRO}, sans-serif;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  margin-left: ${({ Ml }) => Ml}px;
  margin-right: ${({ Mr }) => Mr}px;
  margin-top: ${({ Mt }) => Mt}px;
`;

export const StyledTextDefaultsourceSans = styled(StyledTextCustom)`
  color: ${({ theme }) => theme.COLORS.NEUTRAL_COLORS.DARKEST};
`;

export const StyParagraphPoppins = styled.p<CustomColorProps>`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  font-size: ${({ fontSize }) => fontSize || 12 + "px"};
  color: ${({ theme, color }) => color || theme.COLORS.NEUTRAL_COLORS.DARKEST};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  margin-left: ${({ Ml }) => Ml};
  margin-right: ${({ Mr }) => Mr};
  margin-top: ${({ Mt }) => Mt};
`;
