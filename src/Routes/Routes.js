import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './Routes.constants';
import Header from '../Components/Header';
import Login from '../Pages/Login/Login';
import * as S from './Routes.style';

export default function Routes () {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));

  return (
    <>
      { currentUser 
        ? (
          <>
            <Header setCurrentUser={setCurrentUser}/>
            <S.Routes>
              <Switch>
                { routes.map((route) => <Route key={route.path} {...route} />) }
              </Switch>
            </S.Routes>
          </>
        ) : <Login setCurrentUser={setCurrentUser} /> 
      }
    </>
  )
}