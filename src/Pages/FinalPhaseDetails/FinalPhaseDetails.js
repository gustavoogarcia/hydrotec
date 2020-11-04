import React from 'react';
import IndicatorsDetails from '../../Components/IndicatorsDetails';
import FinalPhaseIcon from "../../images/FinalPhaseIcon";
import * as S from './FinalPhaseDetails.style';

const FinalPhaseDetails = () => {

  const tableItems = [
    { label: 'Hortaliça', name: 'label' },
    { label: 'Plantado', name: 'plantedUnits' },
    { label: 'Planejado', name: 'plannedUnits' },
    { label: 'Ocupação', name: 'occupationPercentage' },
  ]

  const finalPhaseInfo = { 
    tableItems,
    label: "fase final",
    shortLabel: "Hortaliça",
    units: 485,
    color: "#8bc53f",
    icon: FinalPhaseIcon,
    link: '/indicadores/fase-final',
    path: ['berçario'],
    data: [
      { label: 'Alface crespa', plantedUnits: 17, plantedPercentage: 20, plannedUnits: 36, plannedPercentage: 100, occupationPercentage: 25 },
      { label: 'Alface americana', plantedUnits: 13, plantedPercentage: 32, plannedUnits: 20, plannedPercentage: 10, occupationPercentage: 17 },
      { label: 'Cebolinha', plantedUnits: 24, plantedPercentage: 37, plannedUnits: 31, plannedPercentage: 10, occupationPercentage: 42 },
      { label: 'Rúcula', plantedUnits: 37, plantedPercentage: 22, plannedUnits: 45, plannedPercentage: 10, occupationPercentage: 76 },
    ]
  }
  return (
    <S.FinalPhaseDetails>
      <IndicatorsDetails {...finalPhaseInfo} />
    </S.FinalPhaseDetails>
  );
};

export default FinalPhaseDetails;
