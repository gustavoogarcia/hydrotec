import React from 'react';
import * as S from './FeaturedNumber.style';

export default function FeaturedNumber ({ label, value }) {
  return (
    <S.FeaturedNumber>
      <S.FeaturedNumberLabel>{label}</S.FeaturedNumberLabel>
      <S.FeaturedNumberValue>{value}</S.FeaturedNumberValue>
    </S.FeaturedNumber>
  )
}