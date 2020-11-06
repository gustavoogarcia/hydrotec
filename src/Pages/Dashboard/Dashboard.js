import React from 'react';
import DashboardWeather from '../../Components/Dashboard/DashboardWeather';
import DashboardIndicators from '../../Components/Dashboard/DashboardIndicators';
import DashboardNextActivities from '../../Components/Dashboard/DashboardNextActivities';
import DashboardNextHarvest from '../../Components/Dashboard/DashboardNextHarvest';
import DashboardOccupation from '../../Components/Dashboard/DashboardOccupation';
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
