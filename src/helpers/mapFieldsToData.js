const getFieldValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value;
}

const getSelectFieldValue = ({ dataObj, fields, field }) => {
  console.log(field);
  dataObj[field] = fields[field].value?.value;
}
const getSelectObjectFieldValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value;
}

const getSelectMultiFieldValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value ? fields[field]?.value?.map(arrayField => arrayField.value ) : [];
}

const getselectObjectMultiFieldValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value ? fields[field]?.value?.map(arrayField => {
    const { __isNew__, ...restArrayFields } = arrayField;
    return restArrayFields
  }) : [];
}

const getFieldArrayValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value ? fields[field]?.value?.map(arrayField => arrayField.value ) : [];
}

const getFieldObjectArrayValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value
    .map(objectArrayField => {
      const objectArrayObj = {};
      Object.entries(objectArrayField.value).map(field => objectArrayObj[field[0]] = field[1].value);
      return objectArrayObj;
    });
};

const getFieldAccessAreasContentsValue = ({ dataObj, fields, field }) => {
  dataObj[field] =  fields[field].value.map((field) => ({
    accessArea: field.accessArea._id,
    contentsList: field.contentsList.map((content) => content._id),
    isActive: field.isActive
  }))
};

export default function mapFieldsToData({ fields }) {
  console.log(fields);
  let dataObj = {};
  for (const field in fields) {
    switch (fields[field].type) {
      case "select":
        getSelectFieldValue({ dataObj, fields, field })
      break;
      case "selectObjectMulti":
        getselectObjectMultiFieldValue({ dataObj, fields, field })
      break;
      case "selectObject":
        getSelectObjectFieldValue({ dataObj, fields, field })
      break;
      case "selectMulti":
        getSelectMultiFieldValue({ dataObj, fields, field })
      break;
      case "array":
        getFieldArrayValue({ dataObj, fields, field })
      break;
      case "objectArray":
        getFieldObjectArrayValue({ dataObj, fields, field })
      break;
      case "selectArray":
        getFieldArrayValue({ dataObj, fields, field })
      break
      case "accessAreasContents":
        getFieldAccessAreasContentsValue({ dataObj, fields, field })
      break;
      default:
        getFieldValue({ dataObj, fields, field })
    }
  }
  return dataObj;
}
