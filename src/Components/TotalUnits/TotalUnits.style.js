import styled from 'styled-components';

export const TotalUnits = styled.div`
  display: flex;
  background: ${({ color }) => color};
  border-radius: 50px;
  padding: 8px 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 32px;
  font-size: 12px;
  align-self: start;
`
export const TotalUnitsValue = styled.span`
  background: ${({ theme: { color: { gray } } }) => gray };
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: lighter;
  font-size: 20px;
  padding: 10px;
  margin: -15px 10px;
  border-radius: 16px;
`