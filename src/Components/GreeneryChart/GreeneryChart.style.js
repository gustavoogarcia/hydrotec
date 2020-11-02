import styled from 'styled-components';

export const GreeneryChart = styled.div`
  display: grid;
  position: relative;
  margin-bottom: 30px;
  max-width: 640px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template-columns: 200px auto;
    }
  }
`

export const GreeneryChartLabelValue = styled.p`
  display: flex;
  background: ${({color}) => color};
  justify-content: space-between;
  border-radius: 20px;
  align-items: center;
  padding-left: 12px;
  color: ${({ theme: { color: { white }}}) => white};
  margin-bottom: 10px;
  align-self: start;

  hr {
    height: 14px;
    margin: 0 20px;
    border: 1px solid ${({ theme: { color: { white }}}) => white};
  }

  span {
    background: ${({ theme: { color: { gray }}}) => gray};
    color: ${({ theme: { color: { white }}}) => white};
    padding: 4px 20px;
    font-weight: bold;
    border-radius: 20px;
  }
`

export const GreeneryChartLabel = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`

export const GreeneryChartCaption = styled.div`
  display: flex;
  padding: 0 8px;
`

export const GreeneryChartCaptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  text-transform: uppercase;
  font-size: 10px;

  &:before {
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 50%;
    margin-right: 4px;
    background: ${({ color }) => color };
  }
`

export const GreeneryChartItemLabel = styled.div`
  color: ${({ theme: { color: { mediumGray }}}) => mediumGray};
  background: ${({ theme: { color: { cream }}}) => cream};
  font-size: 12px;
  font-weight: bold;
  position: relative;
  z-index: 10;
  margin: 2px 16px 4px;

`
export const GreeneryChartItemBar = styled.div`
  background: ${({ theme: { color: { white }}}) => white};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 4px 12px;
  gap: 4px;
  height: 28px;
  position: relative;
  z-index: 10;
  margin-bottom: 12px;
`
export const GreeneryChartItemBarValue = styled.div`
  background: ${({color}) => color};
  width: ${({value}) => `${value}%`};
  height: 100%;
  border-radius: 20px;
`

export const GreeneryChartNumbers = styled.div`
  display: grid;
  margin: 0 -14px 0 7px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 20px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      margin: 0 0 0 7px;
    }
  }
`

export const GreeneryChartNumber = styled.div`
  font-size: 10px;
  color: ${({ theme: { color: { mediumGray } } }) => mediumGray };
`

export const GreeneryChartWhiteSpace = styled.div`
  display: none;
`

export const GreeneryChartNumberLines = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: calc(100% - 100px);
  top: 80px;
  left: 10px;
  right: 10px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      top: 16px;
      left: 212px;
      right: 12px;
      height: calc(100% - 40px);
    }
  }
`

export const GreeneryChartNumberLine = styled.hr`
  border: 1px solid ${({ theme: { color: { mediumGray } } }) => mediumGray };
  opacity: .2;
`