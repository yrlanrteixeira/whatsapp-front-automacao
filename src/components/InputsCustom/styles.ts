import styled from "styled-components";

import { Input, Form, Upload } from "antd";

import { InputAntdProps } from "@global/interface/inputs";

const { Item } = Form;
const { TextArea } = Input;

export const StyledItem = styled(Item)<InputAntdProps>`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  margin-bottom: 12px;
  label {
    color: ${({ theme, labelColor }) =>
      labelColor || theme.COLORS.NEUTRAL_COLORS.DARKEST};
    font-weight: ${({ fontWeight }) => fontWeight || "600"};
    font-size: ${({ fontSize }) => fontSize};
  }
  .ant-form-item-explain,
  .ant-form-item-extra {
    font-size: ${({ fontSize }) => fontSize};
  }
`;

export const StyledInput = styled(Input)`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  color: ${({ theme }) => theme.COLORS.NEUTRAL_COLORS.DARK};
`;

export const StyTextArea = styled(TextArea)``;

export const StyLabel = styled.label`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
`;

export const StyCustomInput = styled(Input)`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
`;

export const StyUpload = styled(Upload)`
  .ant-upload-select {
    width: 100% !important;
    margin: 0 !important;
    position: relative !important;

    .ant-upload {
      width: 100% !important;
      position: absolute !important;
    }
  }
`;
