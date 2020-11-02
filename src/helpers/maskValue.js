
export default function maskValue(name, value) {
  switch (name) {
    case 'cpf':
      return (
        value &&
        value
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      );
    case 'mobilePhone':
      return value && `(${value.substr(0, 2)})${value.substr(2, 6)}-${value.substr(8, value.lenght)}`;
    case 'gender':
      return value && value === 1 ? 'Feminino' : 'Masculino';
    case 'zipCode':
      return value && `${value.substr(0, 5)}-${value.substr(5, value.lenght)}`;
    default:
      return value;
  }
};
