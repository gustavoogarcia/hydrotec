import React, { useEffect } from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputSelect({
  onChange,
  setFields,
  isMulti,
  options,
  loadOptions,
  loadEmpty,
  components,
  isClearable,
  name,
  disabled,
  isCreatable,
  isSearchable=false,
  filter,
  filterField,
  ...props
}) {

  const loadOptionsHandler = (inputValue, callback) => {
    if (loadOptions ) {
      if (isCreatable || !loadEmpty) {
        if (inputValue.length > 1) { loadOptions(inputValue, callback)}
      } else { loadOptions(inputValue, callback) }
    } else if (options){
       callback(options)
    } else { callback([]) }
  };

  return (
    <S.InputSelect
      {...props}
      defaultOptions
      id={name}
      name={name}
      key={filter}
      classNamePrefix="inputSelect"
      loadOptions={loadOptionsHandler}
      isClearable={isClearable}
      isMulti={isMulti}
      components={{...components}}
      isSearchable={isSearchable}
      isDisabled={disabled}
      isValidNewOption={(inputValue) => isCreatable && inputValue.length > 2 }
      formatCreateLabel={(inputValue) => inputValue}
      noOptionsMessage={() => "Sem opções"}
      loadingMessage={() => "Carregando"}
      filterOption={(e) => {
          if(Array.isArray(filter)){
            return filterField ? filter.some((item) => e.data[filterField]?.label === item.label) : true
          } else { return filterField ? filter === e.data[filterField]?.label : true }
        }}
      onChange={(value) => (
        onChange
          ? onChange({ target: { name, value }, setFields })
          : inputChange({ target: { name, value }, setFields })
      )}
    />
  );
};
