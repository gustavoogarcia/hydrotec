
export const inputChange = ({ target, setFields }) => {
  const { name, value } = target;
  setFields((oldFields) => {
    oldFields[name].value = value;
    return ({ ...oldFields });
  });
};