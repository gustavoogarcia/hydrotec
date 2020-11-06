import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './Routes.constants';
import * as S from './Routes.style';

export default function Routes () {
  return (
    <S.Routes>
      <Switch>
        { routes.map((route) => <Route key={route.path} {...route} />) }
      </Switch>
    </S.Routes>
  )
}