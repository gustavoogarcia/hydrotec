import React from "react";
import TotalUnits from "../../TotalUnits";
import * as S from "./DashboardNextHarvest.style";

const DashboardNextHarvestTab = ({ data, color }) => {
  const nextActivities = data.reduce((acc, dataItem) => acc + dataItem.value, 0)
  const maxBar = data.reduce((acc, dataItem) => acc > dataItem.value ? acc : dataItem.value, 0)

  return (
    <S.DashboardNextHarvestTab>
      <TotalUnits value={nextActivities} color={color} />
      { data.map(({ value, label, color }) => (
        <>
          <S.DashboardNextHarvestInfoLabel>{label}</S.DashboardNextHarvestInfoLabel>
          <S.DashboardNextHarvestInfo>
            <S.DashboardNextHarvestInfoBar>
              <S.DashboardNextHarvestInfoBarValue color={color} width={`${value * 100 / maxBar}%`} />
            </S.DashboardNextHarvestInfoBar>
            <S.DashboardNextHarvestInfoValue>{value}</S.DashboardNextHarvestInfoValue>
          </S.DashboardNextHarvestInfo>
        </>
      ))}
    </S.DashboardNextHarvestTab>
  );
};

export default DashboardNextHarvestTab;
