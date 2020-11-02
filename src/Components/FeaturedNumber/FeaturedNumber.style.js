import styled from 'styled-components';

export const FeaturedNumber = styled.div`
  border: 5px solid #ff6b57;
  border-radius: 50px;
  padding: 8px 16px;
  position: relative;
`
export const FeaturedNumberLabel = styled.p`
  text-transform: uppercase;
  font-size: 10px;
  margin-right: 84px;
  color: ${({ theme: { color: { gray } } }) => gray };

`
export const FeaturedNumberValue = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  min-height: calc(100% + 10px);
  font-weight: bold;
  background: #ff6b57;
  color: ${({ theme: { color: { cream } } }) => cream };
  border-radius: 50px;
  padding: 3px 24px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

`