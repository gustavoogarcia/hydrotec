import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';

export default function Input(props) {
  const { type } = props;

  const fieldTypes = {
    "select": <InputSelect {...props} />,
    "textArea":  <InputTextArea {...props} />,
  };

  return fieldTypes[type] || <InputText {...props} />
};
