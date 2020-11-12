import SearchIcon from '../../images/SearchIcon';
import GeneratePDFIcon from '../../images/DownloadIcon';
import exportCSVIcon from '../../images/ExportIcon';
import { css } from 'styled-components';
import http from '../../service';

export const type = 'list'
export const pageColor = '#8bc53f'
export const pageLabel = {
  name: 'plantingLots',
  singular: 'lote de plantio',
  plural: 'lotes de plantio'
};

export const plantingLotsSearchFieldsState = () => ({
  from: { value: '' },
  until: { value: '' },
  greenHouse: { value: '' },
  greenery: { value: '' },
  stage: { value: '' },
  sortBy: { value: { label: 'Data ↓', value: 'dateDsc' } },
  limit: { value: { label: '20', value: 20 } },
});

export const plantingLotsSearchFields = ({ fields }) => ({
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
  greenery: { 
    ...fields.greenery,
    name: 'greenery',
    label: 'Hortaliça',
    placeholder: 'Escreve ou selecione',
    type: 'select',
    isSearchable: true,
    
  },
  stage: { 
    ...fields.stage,
    name: 'stage',
    label: 'Estágio',
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
      { label: 'Estufa ↓', value: 'greenHouseDsc' }, 
      { label: 'Estufa ↑', value: 'greenHouseAsc' }, 
      { label: 'Hortaliça ↓', value: 'greeneryDsc' }, 
      { label: 'Hortaliça ↑', value: 'greeneryAsc' }, 
      { label: 'Prev. de colheita ↓', value: 'harvestForecastDsc' }, 
      { label: 'Prev. de colheita ↑', value: 'harvestForecastAsc' }, 
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
  { fieldLabel: 'Número do lote', fieldType: 'id' },
  { fieldLabel: 'Hortaliça', fieldType: 'greenery' },
  { fieldLabel: 'Estufa', fieldType: 'greenHouse' },
  { fieldLabel: 'Data de plantio', fieldType: 'date' },
  { fieldLabel: 'Prev. de colheita', fieldType: 'harvestForecast' },
  { fieldLabel: '', fieldType: 'tags' },
  { fieldLabel: '', fieldType: 'history' },
  { fieldLabel: '', fieldType: 'delete' },
]

export const searchGridTemplate = css`
  grid-template: ${`
    "from" 
    "until" 
    "greenery"
    "greenHouse"
    "stage"
    "sortBy"
    "submitButton"
    "generatePDF"
    "exportCSV"
    "limit"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template: ${`
        "from until" 
        "greenery greenery"
        "greenHouse stage"
        "sortBy limit"
        "submitButton submitButton" 
        "generatePDF exportCSV"
      `};
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD }) {
      grid-template:
        "from from from from until until until until . . . ." 
        "greenery greenery greenery greenery greenHouse greenHouse greenHouse greenHouse stage stage stage stage"
        "sortBy sortBy sortBy sortBy sortBy sortBy limit limit limit limit . ."
        "submitButton submitButton submitButton submitButton generatePDF generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV exportCSV "
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG }) {
      grid-template:
        "from from from from until until until until . . . ." 
        "greenery greenery greenery greenery greenHouse greenHouse greenHouse greenHouse stage stage stage stage"
        "sortBy sortBy sortBy limit limit limit . . . . . ."
        "submitButton submitButton submitButton generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV . . ."
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`

export const listCardGridTemplate = css`
  grid-template: 
    "id id id id id id"
    "greenHouse greenHouse greenHouse greenery greenery greenery"
    "date date date harvestForecast harvestForecast harvestForecast"
    "tags tags history history delete delete"
  ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      grid-template:
        "id greenHouse greenery tags history delete"
        "id date harvestForecast tags history delete"
      ;
      grid-template-columns: auto 1fr 1fr 40px 40px 40px;
    }
  
    @media (min-width: ${({ theme: { screen: { screenLG} }}) => screenLG}) {
      grid-template:
        "id greenHouse greenery date harvestForecast tags history delete"
      ;
      grid-template-columns: auto 1fr 1fr 1fr 1fr 40px 40px 40px;
    }
  }
`
