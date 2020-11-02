import React from 'react';
import * as S from './GreeneryChart.style';
import { lighten } from 'polished'

export default function GreeneryChart ({ data, color }) {
  const decimals = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  return (
    <S.GreeneryChart>
      <S.GreeneryChartLabel>
        <S.GreeneryChartLabelValue color={color}>Hortaliça <hr/> <span>%</span></S.GreeneryChartLabelValue>
        <S.GreeneryChartCaption>
          <S.GreeneryChartCaptionItem color={color}>Plantado</S.GreeneryChartCaptionItem>
          <S.GreeneryChartCaptionItem color={lighten('.3', color)}>Planejado</S.GreeneryChartCaptionItem>
        </S.GreeneryChartCaption>
      </S.GreeneryChartLabel>
      <S.GreeneryChartNumbers>
        { decimals.map((decimal) => (
          <S.GreeneryChartNumber>{decimal}</S.GreeneryChartNumber>
        ))}
      </S.GreeneryChartNumbers>
      <S.GreeneryChartWhiteSpace></S.GreeneryChartWhiteSpace>
      <S.GreeneryChartNumberLines>{ decimals.map(() => <S.GreeneryChartNumberLine />)}</S.GreeneryChartNumberLines>
      { data.map(({ label, plantedPercentage, plannedPercentage }) => (
        <>
          <S.GreeneryChartItemLabel>{label}</S.GreeneryChartItemLabel>
          <S.GreeneryChartItemBar>
            { plantedPercentage && <S.GreeneryChartItemBarValue color={color} value={plantedPercentage} /> }
            { plannedPercentage && <S.GreeneryChartItemBarValue color={lighten('.3', color)}  value={plannedPercentage} /> }
          </S.GreeneryChartItemBar>
        </>
      ))}
    </S.GreeneryChart>
  )
}