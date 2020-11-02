import React from 'react';
import IndicatorsDetails from '../../Components/IndicatorsDetails';
import NurseryIcon from "../../images/NurseryIcon";
import * as S from './NurseryDetails.style';

const NurseryDetails = () => {
  
  const tableItems = [
    { label: 'Hortaliça', name: 'label' },
    { label: 'Plantado', name: 'plantedUnits' },
    { label: 'Planejado', name: 'plannedUnits' },
    { label: 'Ocupação', name: 'occupationPercentage' },
  ]

  const maternityInfo = { 
    tableItems,
    label: "berçario",
    units: 485,
    color: "#1e7c4d",
    icon: NurseryIcon,
    link: '/indicadores/bercario',
    path: ['berçario'],
    data: [
      { label: 'Alface crespa', plantedUnits: 17, plantedPercentage: 20, plannedUnits: 36, plannedPercentage: 100, occupationPercentage: 25 },
      { label: 'Alface americana', plantedUnits: 13, plantedPercentage: 32, plannedUnits: 20, plannedPercentage: 10, occupationPercentage: 17 },
      { label: 'Cebolinha', plantedUnits: 24, plantedPercentage: 37, plannedUnits: 31, plannedPercentage: 10, occupationPercentage: 42 },
      { label: 'Rúcula', plantedUnits: 37, plantedPercentage: 22, plannedUnits: 45, plannedPercentage: 10, occupationPercentage: 76 },
    ]
  }
  return (
    <S.NurseryDetails>
      <IndicatorsDetails {...maternityInfo} />
    </S.NurseryDetails>
  );
};

export default NurseryDetails;
