import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';

export default function Input(props) {
  const { type } = props;

  switch (type) {
    case 'select':
      return <InputSelect {...props} />
    case 'textArea':
      return <InputSelect {...props} />
    default:
      return <InputText {...props} />
  }
};
