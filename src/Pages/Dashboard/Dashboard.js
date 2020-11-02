import React from 'react';
import DashboardWeather from '../../Components/DashboardWeather';
import DashboardIndicators from '../../Components/DashboardIndicators';
import DashboardNextActivities from '../../Components/DashboardNextActivities';
import DashboardNextHarvest from '../../Components/DashboardNextHarvest';
import DashboardOccupation from '../../Components/DashboardOccupation';
import * as Styled from './Dashboard.style';

const Dashboard = () => {

  return (
    <Styled.Dashboard>
      <DashboardWeather />
      <DashboardIndicators />
      <DashboardNextActivities />
      <DashboardNextHarvest />
      <DashboardOccupation />
    </Styled.Dashboard>
  );
};

export default Dashboard;
