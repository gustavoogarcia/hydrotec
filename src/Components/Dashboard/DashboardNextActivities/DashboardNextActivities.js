import React, { useState } from "react";
import DashboardTitle from "../DashboardTitle";
import DashboardTabs from "../DashboardTabs";
import DashboardNextActivitiesTab from "./DashboardNextActivitiesTab";
import Button from "../../Button";
import * as S from "./DashboardNextActivities.style";

const DashboardNextActivities = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { label: '7 dias', data: [
      { label: 'Transferência', value: 12, color: '#FFD255' },
      { label: 'Colheita', value: 2, color: '#8bc53f' },
      { label: 'Limpeza', value: 8, color: '#16c4c4' },
      { label: 'Manutenção', value: 1, color: '#ff6b57' },
    ] },
    { label: '15 dias', data: [
      { label: 'Transferência', value: 20, color: '#FFD255' },
      { label: 'Colheita', value: 6, color: '#8bc53f' },
      { label: 'Limpeza', value: 23, color: '#16c4c4' },
      { label: 'Manutenção', value: 7, color: '#ff6b57' },
    ] },
    { label: '30 dias', data: [
      { label: 'Transferência', value: 45, color: '#FFD255' },
      { label: 'Colheita', value: 34, color: '#8bc53f' },
      { label: 'Limpeza', value: 88, color: '#16c4c4' },
      { label: 'Manutenção', value: 13, color: '#ff6b57' },
    ] },
  ]

  const nextActivities = tabs[activeTab].data.reduce((acc, dataItem) => acc + dataItem.value, 0)

  return (
    <S.DashboardNextActivities>
      <DashboardTitle>
        Próximas atividades
        <S.DashboardNextActivitiesValue>{nextActivities}</S.DashboardNextActivitiesValue>
      </DashboardTitle>
      <DashboardTabs tabs={tabs} component={DashboardNextActivitiesTab} activeTab={activeTab} setActiveTab={setActiveTab} color="#ff6b57" />
      <Button label=". . . ver mais" />
    </S.DashboardNextActivities>
  );
};

export default DashboardNextActivities;
