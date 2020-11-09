import styled from "styled-components";

export const Field = styled.div`
  display: flex;
  border: 2px solid ${({ theme: { color: { cream } } }) => cream };
  border-radius: 8px;
  grid-area: ${({ name }) => name };
`;

export const FieldTextArea = styled.div`
  display: flex;
  border: 2px solid ${({ theme: { color: { cream } } }) => cream };
  border-radius: 8px;
  grid-area: ${({ name }) => name };
  position: relative;
  margin-top: 10px;

  input {
    padding-top: 16px;
  }
`;

export const FieldLabel = styled.label`
  font-size: 12px;
  padding: 4px 8px;
  white-space: nowrap;
  align-items: center;
  display: flex;
  background: white;
  color: ${({ theme: { color: { brandComplementarDark } } }) => brandComplementarDark };
`;

export const FieldTextAreaLabel = styled.label`
  font-size: 12px;
  padding: 5px 8px;
  white-space: nowrap;
  position: absolute;
  align-items: center;
  display: flex;
  top: -15px;
  left: -2px;
  background: white;
  border: 2px solid ${({ theme: { color: { cream } } }) => cream };
  border-radius: 8px;
  color: ${({ theme: { color: { brandComplementarDark } } }) => brandComplementarDark };
`;