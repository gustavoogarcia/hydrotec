import { css } from 'styled-components';

export const type = 'list'
export const pageColor = '#8bc53f'

export const pageLabel = {
  name: 'campNotebook',
  singular: 'caderno de campo',
  plural: 'cadernos de campo',
  newLabel: 'Novo',
  editLabel: 'Editar',
  application: "Aplicação",
  maintenance: "Manutenção",
  deficiency: "Deficiência",
  pest: "Praga ou doença",
};

export const plantingLotFieldsState = () => ({
  greenHouse: { value: '' },
  temperature: { value: '' },
  humidity: { value: '' },
  comments: { value: '' },
  annotations: { value: [] },
});

export const plantingLotAddFieldsState = () => ({
  application: {
    pesticide: { value: '' },
    amount: { value: '' },
    sector: { value: '' },
    stand: { value: '' },
    lot: { value: '' },
    comments: { value: '' },
  },
  maintenance: {
    comments: { value: '' },
    date: { value: '' },
    images: { value: '' },
  },
  deficiency: {
    nutrient: { value: '' },
    amount: { value: '' },
    sector: { value: '' },
    stand: { value: '' },
    lot: { value: '' },
    comments: { value: '' },
  },
  pest: {
    pest: { value: '' },
    pesticide: { value: '' },
    amount: { value: '' },
    sector: { value: '' },
    stand: { value: '' },
    lot: { value: '' },
    images: { value: '' },
    comments: { value: '' },
  },
});

export const plantingLotAddFields = ({ fields, addFields, setFields, setAddFields, setAddField }) => ({
  application: {
    pesticide: { 
      ...addFields.application.pesticide,
      name: 'pesticide',
      label: 'Defensivo',
      placeholder: 'Digite ou selecione',
      type: 'select',
      options: [
        { value: 'pesticide1', label: 'Pesticida 1' },
        { value: 'pesticide2', label: 'Pesticida 2' },
        { value: 'pesticide3', label: 'Pesticida 3' },
        { value: 'pesticide4', label: 'Pesticida 4' }
      ],
      isSearchable: true,
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.application[name].value = value;
          return newFields;
        })
      },
    },
    amount: { 
      ...addFields.application.amount,
      name: 'amount',
      label: 'Quantidade',
      placeholder: 'Digite',
      type: 'number',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.application[name].value = value;
          return newFields;
        })
      },
    },
    sector: { 
      ...addFields.application.sector,
      name: 'sector',
      label: 'Setor',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'sector1', label: 'Setor 1' },
        { value: 'sector2', label: 'Setor 2' },
        { value: 'sector3', label: 'Setor 3' },
        { value: 'sector4', label: 'Setor 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.application[name].value = value;
          return newFields;
        })
      },
    },
    stand: { 
      ...addFields.application.stand,
      name: 'stand',
      label: 'Banca',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'stand1', label: 'Banca 1' },
        { value: 'stand2', label: 'Banca 2' },
        { value: 'stand3', label: 'Banca 3' },
        { value: 'stand4', label: 'Banca 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.application[name].value = value;
          return newFields;
        })
      },
    },
    lot: { 
      ...addFields.application.lot,
      name: 'lot',
      label: 'Lote',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'lot1', label: 'Lote 1' },
        { value: 'lot2', label: 'Lote 2' },
        { value: 'lot3', label: 'Lote 3' },
        { value: 'lot4', label: 'Lote 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.application[name].value = value;
          return newFields;
        })
      },
    },
    comments: { 
      ...addFields.application.comments,
      name: 'comments',
      label: 'Observações',
      placeholder: 'Insira sua observação',
      type: 'textarea',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.application[name].value = value;
          return newFields;
        })
      },
    },
    addButton: { 
      name: 'addButton',
      label: 'Adicionar',
      type: 'button',
      variation: 'primary',
      onClick: () => {
        setFields({ ...fields, annotations: { value: [ ...fields.annotations.value, { ...addFields.application, type: 'application' }] } })
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      }
    },
    cancelButton: { 
      name: 'cancelButton',
      label: 'Cancelar',
      type: 'button',
      variation: 'danger',
      onClick: () => {
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      },
    },
  },
  maintenance: {
    comments: { 
      ...addFields?.maintenance.comments,
      name: 'comments',
      label: 'Observações',
      placeholder: 'Insira sua observação',
      type: 'textarea',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.maintenance[name].value = value;
          return newFields;
        })
      },
    },
    date: { 
      ...addFields?.maintenance.date,
      name: 'date',
      label: 'Data',
      type: 'date',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.maintenance[name].value = value;
          return newFields;
        })
      },
    },
    images: { 
      ...addFields?.maintenance.images,
      name: 'images',
      type: 'file',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.maintenance[name].value = value;
          return newFields;
        })
      },
    },
    addButton: { 
      name: 'addButton',
      label: 'Adicionar',
      type: 'button',
      variation: 'primary',
      onClick: () => {
        setFields({ ...fields, annotations: { value: [ ...fields.annotations.value, { ...addFields.maintenance, type: 'maintenance' }] } })
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      }
    },
    cancelButton: { 
      name: 'cancelButton',
      label: 'Cancelar',
      type: 'button',
      variation: 'danger',
      onClick: () => {
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      },
    },
  },
  deficiency: {
    nutrient: { 
      ...addFields?.deficiency.nutrient,
      name: 'nutrient',
      label: 'Nutriente',
      placeholder: 'Digite ou selecione',
      type: 'select',
      isSearchable: true,
      options: [
        { value: 'nutrient1', label: 'Nutriente 1' },
        { value: 'nutrient2', label: 'Nutriente 2' },
        { value: 'nutrient3', label: 'Nutriente 3' },
        { value: 'nutrient4', label: 'Nutriente 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.deficiency[name].value = value;
          return newFields;
        })
      },
    },
    amount: { 
      ...addFields?.deficiency.amount,
      name: 'amount',
      label: 'Quantidade',
      placeholder: 'Digite',
      type: 'number',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.deficiency[name].value = value;
          return newFields;
        })
      },
    },
    sector: { 
      ...addFields?.deficiency.sector,
      name: 'sector',
      label: 'Setor',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'sector1', label: 'Setor 1' },
        { value: 'sector2', label: 'Setor 2' },
        { value: 'sector3', label: 'Setor 3' },
        { value: 'sector4', label: 'Setor 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.deficiency[name].value = value;
          return newFields;
        })
      },
    },
    stand: { 
      ...addFields?.deficiency.stand,
      name: 'stand',
      label: 'Banca',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'stand1', label: 'Banca 1' },
        { value: 'stand2', label: 'Banca 2' },
        { value: 'stand3', label: 'Banca 3' },
        { value: 'stand4', label: 'Banca 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.deficiency[name].value = value;
          return newFields;
        })
      },
    },
    lot: { 
      ...addFields?.deficiency.lot,
      name: 'lot',
      label: 'Lote',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'lot1', label: 'Lote 1' },
        { value: 'lot2', label: 'Lote 2' },
        { value: 'lot3', label: 'Lote 3' },
        { value: 'lot4', label: 'Lote 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.deficiency[name].value = value;
          return newFields;
        })
      },
    },
    comments: { 
      ...addFields?.deficiency.comments,
      name: 'comments',
      label: 'Observações',
      placeholder: 'Insira sua observação',
      type: 'textarea',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.deficiency[name].value = value;
          return newFields;
        })
      },
    },
    addButton: { 
      name: 'addButton',
      label: 'Adicionar',
      type: 'button',
      variation: 'primary',
      onClick: () => {
        setFields({ ...fields, annotations: { value: [ ...fields.annotations.value, { ...addFields.deficiency, type: 'deficiency' }] } })
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      }
    },
    cancelButton: { 
      name: 'cancelButton',
      label: 'Cancelar',
      type: 'button',
      variation: 'danger',
      onClick: () => {
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      },
    },
  },
  pest: {
    pest: { 
      ...addFields?.pest.pest,
      name: 'pest',
      label: 'Praga ou doença',
      placeholder: 'Digite ou selecione',
      type: 'select',
      isSearchable: true,
      options: [
        { value: 'pest1', label: 'Praga ou doença 1' },
        { value: 'pest2', label: 'Praga ou doença 2' },
        { value: 'pest3', label: 'Praga ou doença 3' },
        { value: 'pest4', label: 'Praga ou doença 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.pest[name].value = value;
          return newFields;
        })
      },
    },
    pesticide: { 
      ...addFields?.pest.pesticide,
      name: 'pesticide',
      label: 'Defensivo',
      placeholder: 'Digite ou selecione',
      type: 'select',
      isSearchable: true,
      options: [
        { value: 'pesticide1', label: 'Defensivo 1' },
        { value: 'pesticide2', label: 'Defensivo 2' },
        { value: 'pesticide3', label: 'Defensivo 3' },
        { value: 'pesticide4', label: 'Defensivo 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.pest[name].value = value;
          return newFields;
        })
      },
    },
    amount: { 
      ...addFields?.pest.amount,
      name: 'amount',
      label: 'Quantidade',
      placeholder: 'Digite',
      type: 'number',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.pest[name].value = value;
          return newFields;
        })
      },
    },
    sector: { 
      ...addFields?.pest.sector,
      name: 'sector',
      label: 'Setor',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'sector1', label: 'Setor 1' },
        { value: 'sector2', label: 'Setor 2' },
        { value: 'sector3', label: 'Setor 3' },
        { value: 'sector4', label: 'Setor 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.pest[name].value = value;
          return newFields;
        })
      },
    },
    stand: { 
      ...addFields?.pest.stand,
      name: 'stand',
      label: 'Banca',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'stand1', label: 'Banca 1' },
        { value: 'stand2', label: 'Banca 2' },
        { value: 'stand3', label: 'Banca 3' },
        { value: 'stand4', label: 'Banca 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.pest[name].value = value;
          return newFields;
        })
      },
    },
    lot: { 
      ...addFields?.pest.lot,
      name: 'lot',
      label: 'Lote',
      placeholder: 'selecione',
      type: 'select',
      isMulti: true,
      options: [
        { value: 'lot1', label: 'Lote 1' },
        { value: 'lot2', label: 'Lote 2' },
        { value: 'lot3', label: 'Lote 3' },
        { value: 'lot4', label: 'Lote 4' }
      ],
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.pest[name].value = value;
          return newFields;
        })
      },
    },
    comments: { 
      ...addFields?.pest.comments,
      name: 'comments',
      label: 'Observações',
      placeholder: 'Insira sua observação',
      type: 'textarea',
      onChange: ({ target: { value, name }}) => {
        setAddFields(oldFields => {
          const newFields = { ...oldFields }
          newFields.pest[name].value = value;
          return newFields;
        })
      },
    },
    addButton: { 
      name: 'addButton',
      label: 'Adicionar',
      type: 'button',
      variation: 'primary',
      onClick: () => {
        setFields({ ...fields, annotations: { value: [ ...fields.annotations.value, { ...addFields.pest, type: 'pest' }] } })
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      }
    },
    cancelButton: { 
      name: 'cancelButton',
      label: 'Cancelar',
      type: 'button',
      variation: 'danger',
      onClick: () => {
        setAddField();
        setAddFields(plantingLotAddFieldsState())
      },
    },
  }
})

export const plantingLotFields = ({ fields, setAddField }) => ({
  greenHouse: { 
    ...fields?.greenHouse,
    name: 'greenHouse',
    label: 'Estufa',
    placeholder: 'Digite ou selecione',
    options: [
      { value: 'greenHouse1', label: 'Estufa 1' },
      { value: 'greenHouse2', label: 'Estufa 2' },
      { value: 'greenHouse3', label: 'Estufa 3' },
      { value: 'greenHouse4', label: 'Estufa 4' }
    ],
    type: 'select',
    isSearchable: true,
  },
  temperature: { 
    ...fields?.temperature,
    name: 'temperature',
    label: 'Temperatura',
    placeholder: 'Digite',
    type: 'number',
    suffix: '°',
  },
  humidity: { 
    ...fields?.humidity,
    name: 'humidity',
    label: 'Umidade',
    placeholder: 'Digite',
    type: 'number',
    suffix: '%',
    isSearchable: true,
  },
  comments: { 
    ...fields?.humicommentsdity,
    name: 'comments',
    label: 'Observações',
    placeholder: 'Insira sua observação',
    type: 'textarea',
  },
  addApplication: { 
    name: 'addApplication',
    label: 'Adicionar aplicação +',
    type: 'button',
    variation: 'primary',
    onClick: () => {
      setAddField('application')
    }
  },
  addMaintenance: { 
    name: 'addMaintenance',
    label: 'Adicionar manutenção +',
    type: 'button',
    variation: 'warning',
    onClick: () => {
      setAddField('maintenance')
    }
  },
  addDeficiency: { 
    name: 'addDeficiency',
    label: 'Adicionar deficiência +',
    type: 'button',
    variation: 'danger',
    onClick: () => {
      setAddField('deficiency')
    }
  },
  addPest: { 
    name: 'addPest',
    label: 'Adicionar praga +',
    type: 'button',
    variation: 'danger',
    onClick: () => {
      setAddField('pest')
    }
  },
  
});

export const gridAddTemplate = {
  application: css`
    grid-template:
      "pesticide"
      "amount"
      "sector"
      "stand"
      "lot"
      "comments"
      ${({ disabled }) => !disabled && `
        "addButton"
        "cancelButton"
      `}
    ;

    @media screen {
      @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
        grid-template: 
          "pesticide pesticide pesticide amount amount amount" 
          "sector sector stand stand lot lot"
          "comments comments comments comments comments comments"
          ${({ disabled }) => !disabled && `"addButton addButton cancelButton cancelButton . ."`}
        ;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      }
    }
  `,
  maintenance: css`
    grid-template: 
      "comments"
      "date"
      "images"
      ${({ disabled }) => !disabled && `
        "addButton"
        "cancelButton"
      `}
    ;

    @media screen {
      @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
        grid-template: 
          "date date date images images images"
          "comments comments comments comments comments comments" 
          ${({ disabled }) => !disabled && `"addButton addButton cancelButton cancelButton . ."`}
        ;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      }
    }
  `,
  deficiency: css`
    grid-template:
      "nutrient"
      "amount"
      "sector"
      "stand"
      "lot"
      "comments"
      ${({ disabled }) => !disabled && `
        "addButton"
        "cancelButton"
      `}
    ;

    @media screen {
      @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
        grid-template:
          "nutrient nutrient nutrient amount amount amount" 
          "sector sector stand stand lot lot"
          "comments comments comments comments comments comments"
          ${({ disabled }) => !disabled && `"addButton addButton cancelButton cancelButton . ."`}
        ;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      }
    }
  `,
  pest: css`
    grid-template:
      "pest"
      "pesticide"
      "amount"
      "sector"
      "stand"
      "lot"
      "comments"
      ${({ disabled }) => !disabled && `
        "addButton"
        "cancelButton"
      `}
    ;

    @media screen {
      @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
        grid-template: 
          "pest pest pesticide pesticide amount amount" 
          "sector sector stand stand lot lot"
          "comments comments comments comments comments comments"
          ${({ disabled }) => !disabled && `"addButton addButton cancelButton cancelButton . ."`}
        ;
        grid-template-columns: 1fr 1fr 1fr 1fr 70px 1fr;
      }
    }
  `
}

export const gridTemplate = css`
  grid-template: ${`
    "greenHouse" 
    "temperature" 
    "humidity"
    "comments"
    "addApplication"
    "addMaintenance"
    "addDeficiency"
    "addPest"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
      grid-template: ${`
        "greenHouse greenHouse temperature humidity" 
        "comments comments comments comments"
        "addApplication addApplication addMaintenance addMaintenance"
        "addDeficiency addDeficiency addPest addPest"
      `};
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`
