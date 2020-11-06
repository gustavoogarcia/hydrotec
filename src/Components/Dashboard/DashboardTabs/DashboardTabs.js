import React, { useState } from "react";
import * as S from "./DashboardTabs.style";

const DashboardTabs = ({ tabs, component: Component, activeTab, setActiveTab, color }) => {

  return (
    <S.DashboardTabs>
      <S.DashboardTabsHeader>
        { tabs.map((tab, index) => (
          <S.DashboardTabsHeaderItem
            key={tab.label}
            isActive={index === activeTab}
            color={color}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </S.DashboardTabsHeaderItem>
        ))}
      </S.DashboardTabsHeader>
      <S.DashboardTabsComponent>
          <Component {...tabs[activeTab]} color={color} />
      </S.DashboardTabsComponent>
    </S.DashboardTabs>
  );
};

export default DashboardTabs;
