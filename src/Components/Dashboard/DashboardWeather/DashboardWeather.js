import React from "react";
import * as S from "./DashboardWeather.style";

const DashboardWeather = () => {
  return (
    <S.DashboardWeather>
      <S.DashboardWeatherTitle>Hidroponia Luz do sol</S.DashboardWeatherTitle>
      <S.DashboardWeatherInfo>
        <S.DashboardWeatherInfoCity>Campinas - SP</S.DashboardWeatherInfoCity>
        <S.DashboardWeatherInfoTemperature>27° C</S.DashboardWeatherInfoTemperature>
        <S.DashboardWeatherInfoLabel>Parcialmente nublado</S.DashboardWeatherInfoLabel>
      </S.DashboardWeatherInfo>
    </S.DashboardWeather>
  );
};

export default DashboardWeather;
