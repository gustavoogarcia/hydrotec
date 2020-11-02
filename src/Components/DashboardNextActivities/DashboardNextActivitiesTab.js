import React from "react";
import DashboardTitle from "../DashboardTitle";
import DashboardTabs from "../DashboardTabs";
import * as S from "./DashboardNextActivities.style";

const DashboardNextActivitiesTab = ({ data }) => {
  console.log(data);
  
  return (
    <S.DashboardNextActivitiesTab>
      { data.map(({ value, label, color }) => (
        <S.DashboardNextActivitiesInfo>
          <S.DashboardNextActivitiesInfoValue color={color}>{value}</S.DashboardNextActivitiesInfoValue>
          <S.DashboardNextActivitiesInfoLabel>{label}</S.DashboardNextActivitiesInfoLabel>
        </S.DashboardNextActivitiesInfo>
      ))}
    </S.DashboardNextActivitiesTab>
  );
};

export default DashboardNextActivitiesTab;
