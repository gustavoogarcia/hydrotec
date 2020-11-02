import React from "react";
import DashboardTitle from "../DashboardTitle";
import Button from "../Button";
import * as S from "./DashboardOccupation.style";
import DashboardLosts from '../../Components/DashboardLosts/DashboardLosts';
import { useHistory } from "react-router-dom";

const DashboardOccupation = () => {
  const history = useHistory();
  const occupationInfo = [
    { label: 'Estufa amarela', value: 16 },
    { label: 'Estufa vermelha', value: 25.34 },
  ]

  const totalOccupation = occupationInfo.reduce((acc, item) => acc + item.value ,0)

  return (
    <S.DashboardOccupation>
      <DashboardTitle>
        Ocupação total das estufas
      </DashboardTitle>
      <S.DashboardOccupationTotalValue>{totalOccupation}%</S.DashboardOccupationTotalValue>
      <S.DashboardOccupationList>
        { occupationInfo.map(({ value, label }) => (
          <S.DashboardOccupationInfo>
            <S.DashboardOccupationInfoLabel>{label}</S.DashboardOccupationInfoLabel>
            <S.DashboardOccupationInfoValue>{value}%</S.DashboardOccupationInfoValue>
          </S.DashboardOccupationInfo>
        ))}
      </S.DashboardOccupationList>
      <Button label=". . . ver mais" onClick={() => history.push('./indicadores/ocupacao')} />
      <DashboardLosts />
    </S.DashboardOccupation>
  );
};

export default DashboardOccupation;
