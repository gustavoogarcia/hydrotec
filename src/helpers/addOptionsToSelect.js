export const addOptionsToSelect = ({data, field, setFields}) => {
  setFields(fields => {
    let newFields = {
      ...fields,
      [field]: {
        ...fields[field],
         value: fields[field].value.map(field => {
          let newField = field
          data && data.forEach(fieldOption => {
            newField.options.push({
              label: fieldOption[field.labelField], 
              value: fieldOption._id
            })
          })
          return newField
        })
      }
    }
    return newFields
  })
}

