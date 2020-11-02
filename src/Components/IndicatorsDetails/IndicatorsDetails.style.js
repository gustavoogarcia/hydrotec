import styled from 'styled-components';

export const IndicatorsDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: auto;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
      padding: 60px;
    }
  }
`

export const IndicatorsDetailsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 32px;

  hr {
    flex: 1;
    border: 1px solid black;
    margin-right: 10px;
  }

  svg {
    height: 40px;
    width: auto;

    path {
      fill: ${({ color }) => color };
    }
  }
`

export const IndicatorsDetailsTitleValue = styled.p`
  text-transform: capitalize;
  background: ${({ color }) => color };
  color: ${({ theme: { color: { white } } }) => white };
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 30px;
  font-weight: bold;
  white-space: nowrap;
`

export const IndicatorsDetailsCaption = styled.p`
  display: flex;
  text-transform: uppercase;
  color: ${({ theme: { color: { mediumGray } } }) => mediumGray };
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;

  &:before {
    content: '';
    display: block;
    position: relative;
    top: 3px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    margin-right: 8px;
    background: ${({ color }) => color };
  }
`
