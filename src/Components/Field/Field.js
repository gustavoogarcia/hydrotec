import React from 'react';
import FieldInput from './FieldInput';
import FieldTextarea from './FieldTextarea';
import Button from '../Button';

export default function Field(props) {
  switch (props.type) {
    case 'button': return <Button {...props} />
    case 'textarea': return <FieldTextarea {...props} />
    default: return <FieldInput {...props} />;
  }
}
