import SearchIcon from '../../images/SearchIcon';
import GeneratePDFIcon from '../../images/DownloadIcon';
import exportCSVIcon from '../../images/ExportIcon';
import { css } from 'styled-components';

export const type = 'list'
export const pageColor = '#13739e'
export const pageLabel = {
  name: 'measures',
  singular: 'controle de PH & EC',
  plural: 'controles de PH & EC'
};

export const measuresSearchFieldsState = () => ({
  from: { value: '' },
  until: { value: '' },
  reservatory: { value: '' },
  sortBy: { value: { label: 'Data ↓', value: 'dateDsc' } },
  limit: { value: { label: '20', value: 20 } },
});

export const measuresSearchFields = ({ fields }) => ({
  from: { 
    ...fields.from,
    name: 'from',
    label: 'De',
    type: 'date' 
  },
  until: { 
    ...fields.until,
    name: 'until',
    label: 'Até',
    type: 'date' 
  },
  reservatory: { 
    ...fields.reservatory,
    name: 'reservatory',
    label: 'Reservatório',
    placeholder: 'Escreve ou selecione',
    type: 'select',
    isSearchable: true,
  },
  submitButton: { 
    name: 'submitButton',
    label: 'Pesquisar',
    type: 'button',
    variation: 'primary',
    rightIcon: SearchIcon 
  },
  generatePDF: { 
    name: 'generatePDF',
    label: 'Gerar PDF',
    type: 'button',
    variation: 'danger',
    rightIcon: GeneratePDFIcon ,
  },
  exportCSV: { 
    name: 'exportCSV',
    label: 'Exportar CSV',
    type: 'button',
    variation: 'warning',
    rightIcon: exportCSVIcon 
  },
  sortBy: { 
    ...fields.sortBy,
    name: 'sortBy',
    label: 'Ordenar por',
    type: 'select',
    options: [
      { label: 'Data ↓', value: 'dateDsc' }, 
      { label: 'Data ↑', value: 'dateAsc' }, 
      { label: 'Reservatorio ↓', value: 'reservatoryeDsc' }, 
      { label: 'Reservatorio ↑', value: 'reservatoryeAsc' }, 
    ],
    isSearchable: true,
  },
  limit: { 
    ...fields.limit,
    name: 'limit',
    label: 'Itens por página',
    type: 'select',
    options: [
      { label: '10', value: 10 }, 
      { label: '20', value: 20 }, 
      { label: '50', value: 50 }, 
      { label: '100', value: 100 }, 
    ],
  },
});

export const cardInfos = [
  { fieldLabel: 'Data', fieldType: 'dateAndTime' },
  { fieldLabel: 'Reservatório', fieldType: 'reservatory' },
  { fieldLabel: 'EC', fieldType: 'ec' },
  { fieldLabel: 'Temperatura', fieldType: 'temperature' },
  { fieldLabel: 'PH', fieldType: 'ph' },
  { fieldLabel: 'Ação', fieldType: 'action' },
]

export const searchGridTemplate = css`
  grid-template: ${`
    "from" 
    "until" 
    "reservatory"
    "sortBy"
    "limit"
    "submitButton"
    "generatePDF"
    "exportCSV"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template: ${`
        "from until" 
        "reservatory reservatory"
        "sortBy limit"
        "submitButton submitButton" 
        "generatePDF exportCSV"
      `};
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD }) {
      grid-template:
        "from from from from until until until until . . . ." 
        "reservatory reservatory reservatory reservatory reservatory reservatory . . . . . ."
        "sortBy sortBy sortBy sortBy sortBy sortBy limit limit limit limit . ."
        "submitButton submitButton submitButton submitButton generatePDF generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV exportCSV "
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG }) {
      grid-template:
        "from from from from until until until until . . . ." 
        "reservatory reservatory reservatory reservatory reservatory reservatory . . . . . ."
        "sortBy sortBy sortBy limit limit limit . . . . . ."
        "submitButton submitButton submitButton generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV . . ."
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`


// id: 123,
// dateAndTime: new Date(),
// reservatory: 'amarelo',
// ec: 1400,
// ecRamge: [700, 1800],
// temperature: 25,
// temperatureRamge: [22, 30],
// ph: 6.3,
// phRamge: [5, 7.5] 

export const listCardGridTemplate = css`
  grid-template: 
    "dateAndTime dateAndTime reservatory"
    "ec temperature ph"
    "action action action"
  ;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen {  
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      grid-template:
        "dateAndTime reservatory ec temperature ph action"
      ;
      grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr;
    }
  }
`
