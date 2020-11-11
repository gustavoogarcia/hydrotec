import React, { useState } from 'react';
import LoginForm from '../../Components/LoginForm';
import * as constants from './Login.constants';
import * as S from './Login.style';

export default function Login({setCurrentUser}) {
  const [fields, setFields] = useState(constants.loginFieldsState());
  const loginFields = constants.loginFields({ fields, setCurrentUser })
  const [loading, setLoaging] = useState(false);
  const [error, setError] = useState('');

  const formObject = { ...constants, fields: loginFields, setFields, loading, error };

  return (
    <S.Login>
      <LoginForm {...formObject} />;
    </S.Login>
  );
}
