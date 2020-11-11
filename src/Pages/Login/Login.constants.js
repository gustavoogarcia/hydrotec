import { css } from 'styled-components';
import mapFieldsToData from '../../helpers/mapFieldsToData';
import { login } from '../../service/auth';

export const loginFieldsState = () => ({
  email: { value: '' },
  password: { value: '' },
})


export const loginFields = ({fields, setCurrentUser}) => ({
  email: {
    ...fields.email,
    required: true,
    name: 'email',
    label: 'Email',
    placeholder: 'Digite aqui o email',
  },
  password: {
    ...fields.password,
    required: true,
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite aqui sua senha ',
  },
  submitButton: {
    label: 'Entrar',
    type: 'button',
    onClick: () => {
      const data = mapFieldsToData({fields});
      login(data).then((res) => setCurrentUser(res));
    },
    variation: 'warning',
  }
})
export const title = "Hidrotech"

export const gridTemplate = css`
    grid-template: ${`
      "email"
      "password"
      "error" 
      "submitButton" 
    `};
    grid-template-columns: 1fr;
`;

    /* @media screen {
      @media (min-width: ${screenXS}) {
        grid-template: ${`
          "formTitle formTitle"
          "email email"
          "password password"
          "error error" 
          ". submitButton" 
        `};
        grid-template-columns: 1fr 200px;
      }
    }
  ` */