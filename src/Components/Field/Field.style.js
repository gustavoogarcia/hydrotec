import styled from "styled-components";

export const Field = styled.div`
  display: flex;
  border: 3px solid ${({ theme: { color: { white } } }) => white };
  border-radius: 8px;
  grid-area: ${({ name }) => name };
`;

export const FieldLabel = styled.label`
  font-size: 12px;
  padding: 4px 8px;
  white-space: nowrap;
  color: ${({ theme: { color: { brandComplementarDark } } }) => brandComplementarDark };
`;