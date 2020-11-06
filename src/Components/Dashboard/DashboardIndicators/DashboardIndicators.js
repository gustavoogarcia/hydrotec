import React from "react";
import DashboardCard from "../DashboardCard";
import DashboardTitle from "../DashboardTitle";
import * as S from "./DashboardIndicators.style";
import MaternityIcon from "../../../images/MaternityIcon";
import VivariumIcon from "../../../images/VivariumIcon";
import NurseryIcon from "../../../images/NurseryIcon";
import FinalPhaseIcon from "../../../images/FinalPhaseIcon";

const DashboardIndicators = () => {
  const dashboardCards = [
    { title: "maternidade", units: 485, color: "#16c4c4", icon: MaternityIcon, link: '/indicadores/maternidade' },
    { title: "berçario", units: 283, color: "#1e7c4d", icon: NurseryIcon, link: '/indicadores/bercario' },
    { title: "viveiro", units: 537, color: "#13739e", icon: VivariumIcon, link: '/indicadores/viveiro' },
    { title: "fase final", units: 624, color: "#8bc53f", icon: FinalPhaseIcon, link: '/indicadores/fase-final' },
  ];

  return (
    <S.DashboardIndicators>
      <DashboardTitle>Indicadores hoje</DashboardTitle>
      <S.DashboardIndicatorsCards>
        {dashboardCards.map((dashboardCard) => (
          <DashboardCard key={dashboardCard.title} {...dashboardCard} />
        ))}
      </S.DashboardIndicatorsCards>
    </S.DashboardIndicators>
  );
};

export default DashboardIndicators;
