import React, { useState } from "react";
import DashboardTitle from "../DashboardTitle";
import DashboardTabs from "../DashboardTabs";
import DashboardNextHarvestTab from "./DashboardNextHarvestTab";
import Button from "../../Button";
import * as S from "./DashboardNextHarvest.style";

const DashboardNextActivities = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { label: '7 dias', data: [
      { label: 'Americana', value: 12, color: '#1e7c4d' },
      { label: 'Cebolinha', value: 2, color: '#13739e' },
      { label: 'Rucula', value: 8, color: '#00a1a5' },
      { label: 'Coentro', value: 1, color: '#8bc53f' },
    ] },
    { label: '15 dias', data: [
      { label: 'Americana', value: 20, color: '#1e7c4d' },
      { label: 'Cebolinha', value: 6, color: '#13739e' },
      { label: 'Rucula', value: 23, color: '#00a1a5' },
      { label: 'Coentro', value: 7, color: '#8bc53f' },
    ] },
    { label: '30 dias', data: [
      { label: 'Americana', value: 45, color: '#1e7c4d' },
      { label: 'Cebolinha', value: 34, color: '#13739e' },
      { label: 'Rucula', value: 88, color: '#00a1a5' },
      { label: 'Coentro', value: 13, color: '#8bc53f' },
    ] },
  ];

  return (
    <S.DashboardNextHarvest>
      <DashboardTitle>
        Próximas colheitas
      </DashboardTitle>
      <DashboardTabs
        tabs={tabs}
        component={DashboardNextHarvestTab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        color="#8bc53f"
      />
      <Button label=". . . ver mais" />
    </S.DashboardNextHarvest>
  );
};

export default DashboardNextActivities;
