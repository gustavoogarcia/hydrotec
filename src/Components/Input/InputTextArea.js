import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions'
import { StyledTextArea } from './Input.style';

export default function InputTextArea({ fields, field, setFields, setInputInFocus, disabled, setDisabled, name, value, type, placeholder,...props}) {

  return (
    <StyledTextArea
      name={name}
      id={name}
      placeholder={placeholder}
      value={value || ''}
      //onFocus={() => type !== 'checkbox' && setInputInFocus(true)}
      //onBlur={() => inputChange({field, fields, setFields, disabled, setDisabled})}
      onChange={({target}) => inputChange({ target, field, fields, setFields, setInputInFocus })}
    />
  );
}
