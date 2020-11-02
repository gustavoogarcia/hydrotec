import React from 'react';
import IndicatorsDetails from '../../Components/IndicatorsDetails';
import VivariumIcon from "../../images/VivariumIcon";
import * as S from './VivariumDetails.style';

const VivariumDetails = () => {

  const tableItems = [
    { label: 'Hortaliça', name: 'label' },
    { label: 'Plantado', name: 'plantedUnits' },
    { label: 'Planejado', name: 'plannedUnits' },
    { label: 'Ocupação', name: 'occupationPercentage' },
  ]

  const vivariumInfo = { 
    tableItems,
    label: "viveiro",
    units: 485,
    color: "#13739e",
    icon: VivariumIcon,
    link: '/indicadores/viveiro',
    path: ['viveiro'],
    data: [
      { label: 'Alface crespa', plantedUnits: 17, plantedPercentage: 20, plannedUnits: 36, plannedPercentage: 100, occupationPercentage: 25 },
      { label: 'Alface americana', plantedUnits: 13, plantedPercentage: 32, plannedUnits: 20, plannedPercentage: 10, occupationPercentage: 17 },
      { label: 'Cebolinha', plantedUnits: 24, plantedPercentage: 37, plannedUnits: 31, plannedPercentage: 10, occupationPercentage: 42 },
      { label: 'Rúcula', plantedUnits: 37, plantedPercentage: 22, plannedUnits: 45, plannedPercentage: 10, occupationPercentage: 76 },
    ]
  }
  return (
    <S.VivariumDetails>
      <IndicatorsDetails {...vivariumInfo} />
    </S.VivariumDetails>
  );
};

export default VivariumDetails;
