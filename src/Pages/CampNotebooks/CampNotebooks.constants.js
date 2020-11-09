import SearchIcon from '../../images/SearchIcon';
import GeneratePDFIcon from '../../images/DownloadIcon';
import exportCSVIcon from '../../images/ExportIcon';
import { css } from 'styled-components';
import NotebookIcon from '../../images/NotebookIcon';

export const type = 'list'
export const pageColor = '#419645'
export const pageLabel = {
  name: 'campNotebook',
  singular: 'caderno de campo',
  plural: 'cadernos de campo',
  icon: NotebookIcon
};

export const campNotebookSearchFieldsState = () => ({
  from: { value: '' },
  until: { value: '' },
  greenHouse: { value: '' },
  sortBy: { value: { label: 'Data ↓', value: 'dateAndTimeDsc' } },
  limit: { value: { label: '20', value: 20 } },
});

export const campNotebookSearchFields = ({ fields }) => ({
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
  greenHouse: { 
    ...fields.greenHouse,
    name: 'greenHouse',
    label: 'Estufa',
    placeholder: 'Escreve ou selecione',
    type: 'select',
    isSearchable: true,
  },
  sortBy: { 
    ...fields.sortBy,
    name: 'sortBy',
    label: 'Ordenar por',
    type: 'select',
    options: [
      { label: 'Data ↓', value: 'dateAndTimeDsc' }, 
      { label: 'Data ↑', value: 'dateAndTimeAsc' }, 
      { label: 'Estufa ↓', value: 'greenHouseDsc' }, 
      { label: 'Estufa ↑', value: 'greenHouseAsc' }, 
      { label: 'Status ↓', value: 'greenHouseDsc' }, 
      { label: 'Status ↑', value: 'greenHouseAsc' }, 
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
    rightIcon: GeneratePDFIcon 
  },
  exportCSV: { 
    name: 'exportCSV',
    label: 'Exportar CSV',
    type: 'button',
    variation: 'warning',
    rightIcon: exportCSVIcon 
  },
});

export const cardInfos = [
  { fieldLabel: 'Data e hora', fieldType: 'dateAndTime' },
  { fieldLabel: 'Estufa', fieldType: 'greenHouse' },
  { fieldLabel: 'Status', fieldType: 'status' },
  { fieldLabel: '', fieldType: 'history' },
  { fieldLabel: '', fieldType: 'delete' },
]

export const searchGridTemplate = css`
  grid-template: ${`
    "from" 
    "until" 
    "greenHouse"
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
        "greenHouse greenHouse"
        "sortBy limit"
        "submitButton submitButton" 
        "generatePDF exportCSV"
      `};
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD }) {
      grid-template:
        "from from from from until until until until . . . ." 
        "greenHouse greenHouse greenHouse greenHouse sortBy sortBy sortBy sortBy limit limit limit limit"
        "submitButton submitButton submitButton submitButton generatePDF generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV exportCSV "
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG }) {
      grid-template:
        "from from from from until until until until . . . ." 
        "greenHouse greenHouse greenHouse greenHouse greenHouse sortBy sortBy limit limit . . ."
        "submitButton submitButton submitButton generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV . . ."
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`

export const listCardGridTemplate = css`
  grid-template:
  "status status status status status status"
  "greenHouse greenHouse dateAndTime dateAndTime dateAndTime dateAndTime"
  "history history history delete delete delete"
  ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media screen {

  
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      grid-template:
        "status greenHouse dateAndTime history delete"
      ;
      grid-template-columns: 120px 1fr 1fr 40px 40px;
    }
  }
`
