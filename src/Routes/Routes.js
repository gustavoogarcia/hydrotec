import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import MaternityDetails from '../Pages/MaternityDetails';
import NurseryDetails from '../Pages/NurseryDetails';
import VivariumDetails from '../Pages/VivariumDetails';
import FinalPhaseDetails from '../Pages/FinalPhaseDetails';
import OccupationDetails from '../Pages/OccupationDetails';
import * as S from './Routes.style';

export default function Routes () {
  return (
    <S.Routes>
      <Switch>
        <Route key={'dashboard'} path='/indicadores/maternidade' component={MaternityDetails} />
        <Route key={'dashboard'} path='/indicadores/bercario' component={NurseryDetails} />
        <Route key={'dashboard'} path='/indicadores/viveiro' component={VivariumDetails} />
        <Route key={'dashboard'} path='/indicadores/fase-final' component={FinalPhaseDetails} />
        <Route key={'dashboard'} path='/indicadores/ocupacao' component={OccupationDetails} />
        <Route key={'dashboard'} path='/' component={Dashboard} />
      </Switch>
    </S.Routes>
  )
}