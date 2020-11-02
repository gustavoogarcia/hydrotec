import { validate } from 'gerador-validador-cpf';
import moment from 'moment';

export default function checkValidity(name, value) {
  switch (name) {
    case 'cpf':
      return (value && value.length === 14) && validate(value);
    case 'cardNumber':
      return (value && value.length === 19) && /^(5[1-5][0-9]{2})/.test(value);
    case 'phone':
      return (value && value.length === 14) || value.length === 15;
    case 'birthDate':
      return (value && value.length === 10) && moment(value, 'DD/MM/YYYY') < moment().subtract(13, 'years');
    case 'zipCode':
      return value && value.length === 9
    case 'email':
      return /\S+@\S+\.\S+/.test(value);
    case 'password':
      return value && value.length > 5 && !/[\u00C0-\u017F\s]+/g.test(value);
    default:
      return true;
  }
};

