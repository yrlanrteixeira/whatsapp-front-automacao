import styled from "styled-components";
import { Row, Col, Button as AntButton, Form } from "antd";

const { Item } = Form;

export const Container = styled.div`
  max-width: 100vw;
  margin-left: 120px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormContainer = styled(Form)`
  width: 100%;
`;

export const StyledRow = styled(Row)`
  padding-top: 1em;
`;

export const StyledCol = styled(Col)`
  padding: 0 8px;
`;

export const StyledItem = styled(Item)`
  font-family: ${({ theme }) => theme.FONTS.MAIN};
  margin-bottom: 12px;
  label {
    color: ${({ theme }) => theme.COLORS.NEUTRAL_COLORS.DARKEST};
    font-weight: 600;
  }
`;

export const FormButton = styled(AntButton)`
  background-color: ${({ theme }) => theme.COLORS.MAIN_COLORS.PRIMARY_PURE};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.MAIN_COLORS.PRIMARY_LIGHT};
  }
`;
