const getFieldValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value;
}

const getSelectFieldValue = ({ dataObj, fields, field }) => {
  dataObj[field] = fields[field].value?.value;
}

export default function mapFieldsToData({ fields }) {
  let dataObj = {};
  for (const field in fields) {
    switch (fields[field].type) {
      case "select":
        getSelectFieldValue({ dataObj, fields, field })
      break;
      default:
        getFieldValue({ dataObj, fields, field })
    }
  }
  return dataObj;
}
