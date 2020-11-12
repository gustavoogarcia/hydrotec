import SearchIcon from '../../images/SearchIcon';
import GeneratePDFIcon from '../../images/DownloadIcon';
import exportCSVIcon from '../../images/ExportIcon';
import { css } from 'styled-components';

export const type = 'list'
export const pageColor = '#8bc53f'
export const pageLabel = {
  name: 'farms',
  singular: 'fazenda',
  plural: 'fazendas'
};

export const farmsSearchFieldsState = () => ({
  fantasyName: { value: '' },
  plan: { value: '' },
  payment: { value: '' },
  status: { value: '' },
  sortBy: { value: { label: 'Data ↓', value: 'dateDsc' } },
  limit: { value: { label: '20', value: 20 } },
});

export const farmsSearchFields = ({ fields }) => ({
  fantasyName: {
    ...fields.fantasyName,
    name: 'fantasyName',
    label: 'Nome',
    placeholder: 'Digite',
  },
  plan: {
    ...fields.plan,
    name: 'plan',
    label: 'Plano',
    placeholder: 'Selecione',
    type: 'select',
    options: [
      { label: 'Plano 1', value: 'plan1' }, 
      { label: 'Plano 2', value: 'plan2' }, 
      { label: 'Plano 3', value: 'plan3' }, 
    ],
    isClearable: true
  },
  payment: {
    ...fields.payment,
    name: 'payment',
    label: 'Pagamento',
    type: 'select',
    placeholder:'Selecione',
    options: [
      { label: 'Em dia', value: 'ok' }, 
      { label: 'Atrasado', value: 'verify' },  
    ],
    isClearable: true
  },
  status: {
    ...fields.status,
    name: 'status',
    label: 'Status',
    type: 'select',
    placeholder: 'Selecione',
    options: [
      { label: 'Ativo', value: 'active' }, 
      { label: 'Inativo', value: 'inative' },  
    ],
    isClearable: true
  },
  sortBy: { 
    ...fields.sortBy,
    name: 'sortBy',
    label: 'Ordenar por',
    type: 'select',
    options: [
      { label: 'Data ↓', value: 'dateDsc' }, 
      { label: 'Data ↑', value: 'dateAsc' }, 
      { label: 'Nome ↓', value: 'nameDsc' }, 
      { label: 'Nome ↑', value: 'nameAsc' }, 
    ],
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
    rightIcon: GeneratePDFIcon ,
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
  { fieldLabel: 'Nome fantasia', fieldType: 'fantasyName' },
  { fieldLabel: 'Plano', fieldType: 'plan' },
  { fieldLabel: 'Pagamento', fieldType: 'payment' },
  { fieldLabel: 'Status', fieldType: 'status' },
  { fieldLabel: '', fieldType: 'history' },
  { fieldLabel: '', fieldType: 'delete' },
]

export const searchGridTemplate = css`
  grid-template: ${`
    "fantasyName"
    "plan"
    "payment"
    "status"
    "sortBy"
    "limit"
    "submitButton"
    "generatePDF"
    "exportCSV"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template: ${`
        "fantasyName plan"
        "payment status"
        "sortBy limit"
        "submitButton submitButton" 
        "generatePDF exportCSV"
      `};
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD }) {
      grid-template:
        "fantasyName fantasyName fantasyName plan plan plan payment payment payment status status status"
        "sortBy sortBy sortBy sortBy sortBy sortBy limit limit limit limit . ."
        "submitButton submitButton submitButton submitButton generatePDF generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV exportCSV "
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG }) {
      grid-template:
        "fantasyName fantasyName plan plan payment payment status status . . . ."
        "sortBy sortBy sortBy limit limit limit . . . . . ."
        "submitButton submitButton submitButton generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV . . ."
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`

export const listCardGridTemplate = css`
  grid-template: 
    "status status status status"
    "fantasyName fantasyName plan plan"
    "payment payment payment payment"
    "history history delete delete"
  ;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      grid-template:
        "status fantasyName plan payment history delete"
      ;
      grid-template-columns: 80px 1fr 1fr 1fr 40px 40px;
    }
  }
`
