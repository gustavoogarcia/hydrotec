import React from 'react';
import IndicatorsDetails from '../../Components/IndicatorsDetails';
import OccupationIcon from "../../images/OccupationIcon";
import * as S from './OccupationDetails.style';

const OccupationDetails = () => {

  const tableItems = [
    { label: 'Hortaliça', name: 'label' },
    { label: 'Ocupação', name: 'occupationUnits' },
    { label: 'Ocupação berçario', name: 'occupationNurseryUnits' },
    { label: 'Ocupação Final', name: 'occupationPercentage' },
  ]

  const vivariumInfo = { 
    tableItems,
    label: "ocupação das estufas",
    units: 485,
    color: "#ff6b57",
    icon: OccupationIcon,
    link: '/indicadores/ocupacao',
    path: ['ocupação das estuvas'],
    data: [
      { label: 'Alface crespa', occupationUnits: 17, occupationNurseryUnits: 17, plantedPercentage: 20, occupationPercentage: 25 },
      { label: 'Alface americana', occupationUnits: 13, occupationNurseryUnits: 17, plantedPercentage: 32, occupationPercentage: 17 },
      { label: 'Cebolinha', occupationUnits: 24, occupationNurseryUnits: 17, plantedPercentage: 37, occupationPercentage: 42 },
      { label: 'Rúcula', occupationUnits: 37, occupationNurseryUnits: 17, plantedPercentage: 22, occupationPercentage: 76 },
    ]
  }
  
  return (
    <S.OccupationDetails>
      <IndicatorsDetails {...vivariumInfo} />
    </S.OccupationDetails>
  );
};

export default OccupationDetails;
