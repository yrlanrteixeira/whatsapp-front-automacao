import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
