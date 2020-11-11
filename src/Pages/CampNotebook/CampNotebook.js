import React, { useEffect, useState } from 'react';
import Field from '../../Components/Field';
import TrashIcon from '../../images/TrashIcon';
import ItemPage from '../../Components/ItemPage';
import CampNotebookIcon from '../../images/NotebookIcon';
import * as constants from './CampNotebook.constants';
import * as S from './CampNotebook.style';

export default function CampNotebook () {
  const { plantingLotFieldsState, plantingLotFields, plantingLotAddFields, plantingLotAddFieldsState, gridAddTemplate, pageLabel } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);
  const [addField, setAddField] = useState();
  const [fields, setFields] = useState(plantingLotFieldsState);
  const [addFields, setAddFields] = useState(plantingLotAddFieldsState);
  const formFields = plantingLotFields({ fields, setFields, setAddFields, setAddField});
  const addFormFields = plantingLotAddFields({ fields, addFields, setFields, setAddFields, setAddField });

  const itemPageObject = {
    ...constants, loading, error, item, fields: formFields, addFields,
    setLoading, setError, icon: CampNotebookIcon, setItem, setFields, setAddFields
  }

  useEffect(() => {
    setItem([
      { id: 1234, date: new Date(), greenHouse: 'Estufa Azul', greenery: 'Alface', harvestForecast: new Date() },
    ])
  }, [])

  const removeHandler = (i) => {
    setFields((oldFields) => {
      const newFields = { ...oldFields };
      newFields.annotations.value.splice(i, 1);
      return newFields;
    });
  }

  return (
    <S.CampNotebook>
      <ItemPage {...itemPageObject}>
      { addField && (
        <>
          <S.ItemPageTitle addField={addField}>{pageLabel[addField]}</S.ItemPageTitle>
          <S.ItemPageForm gridTemplate={gridAddTemplate[addField]} addField={addField}>
            { Object
              .values(addFormFields[addField])
              .map((field) => <Field key={field.name} {...field} setFields={setFields} />)
            }
          </S.ItemPageForm>
        </>
      )}
      { !!fields.annotations.value.length && fields.annotations.value.map((annotation, i) => (
        <>
          <S.CampNotebookAnnotationsTitle addField={annotation.type}>
            {pageLabel[annotation.type]}
          </S.CampNotebookAnnotationsTitle>
          <S.CampNotebookAnnotations>
            <S.CampNotebookAnnotationsFields addField={annotation.type} gridTemplate={gridAddTemplate[annotation.type]} disabled>
              { Object
                .values(addFormFields[annotation.type])
                .filter((field) => field.type !== 'button')
                .map((field) => (
                  <Field 
                    key={field.name} 
                    {...field}
                    value={annotation[field.name]?.value} 
                    disabled
                    setFields={setFields}
                  />
                ))
              }
            </S.CampNotebookAnnotationsFields>
            <S.CampNotebookAnnotationsIcon tooltip="Excluir" onClick={() => removeHandler(i)}>
              <TrashIcon />
            </S.CampNotebookAnnotationsIcon>
          </S.CampNotebookAnnotations>
        </>
      ))}
      </ItemPage>
    </S.CampNotebook>
  );
};
