import React from 'react';
import IndicatorsDetails from '../../Components/IndicatorsDetails';
import MaternityIcon from "../../images/MaternityIcon";
import * as S from './MaternityDetails.style';

const MaternityDetails = () => {

  const tableItems = [
    { label: 'Hortaliça', name: 'label' },
    { label: 'Plantado', name: 'plantedUnits' },
    { label: 'Planejado', name: 'plannedUnits' },
    { label: 'Ocupação', name: 'occupationPercentage' },
  ]

  const maternityInfo = { 
    tableItems,
    label: "maternidade",
    shortLabel: "Hortaliça",
    units: 485,
    color: "#16c4c4",
    icon: MaternityIcon,
    link: '/indicadores/maternidade',
    path: ['maternidade'],
    data: [
      { label: 'Alface crespa', plantedUnits: 17, plantedPercentage: 20, plannedUnits: 36, plannedPercentage: 100, occupationPercentage: 25 },
      { label: 'Alface americana', plantedUnits: 13, plantedPercentage: 32, plannedUnits: 20, plannedPercentage: 10, occupationPercentage: 17 },
      { label: 'Cebolinha', plantedUnits: 24, plantedPercentage: 37, plannedUnits: 31, plannedPercentage: 10, occupationPercentage: 42 },
      { label: 'Rúcula', plantedUnits: 37, plantedPercentage: 22, plannedUnits: 45, plannedPercentage: 10, occupationPercentage: 76 },
    ]
  }
  return (
    <S.MaternityDetails>
      <IndicatorsDetails {...maternityInfo} />
    </S.MaternityDetails>
  );
};

export default MaternityDetails;
