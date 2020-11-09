import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputTextArea from './InputTextArea';
import InputDate from './InputDate';
import InputNumber from './InputNumber';

export default function Input(props) {
  const { type } = props;

  switch (type) {
    case 'select':
      return <InputSelect {...props} />
    case 'textArea':
      return <InputTextArea {...props} />
    case 'date':
      return <InputDate {...props} />
    case 'number':
      return <InputNumber {...props} />
    default:
      return <InputText {...props} />
  }
};
