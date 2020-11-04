import React from 'react';
import FieldInput from './FieldInput';
import Button from '../Button';

export default function Field(props) {
  switch (props.type) {
    case 'button': return <Button {...props} />
    default: return <FieldInput {...props} />;
  }
}
