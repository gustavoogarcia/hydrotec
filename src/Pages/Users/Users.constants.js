import SearchIcon from '../../images/SearchIcon';
import GeneratePDFIcon from '../../images/DownloadIcon';
import exportCSVIcon from '../../images/ExportIcon';
import { css } from 'styled-components';

export const type = 'list'
export const pageColor = '#8bc53f'
export const pageLabel = {
  name: 'users',
  singular: 'usuário',
  plural: 'usuários'
};

export const usersSearchFieldsState = () => ({
  nameAndEmail: { value: '' },
  farm: { value: '' },
  roles: { value: '' },
  status: { value: '' },
  sortBy: { value: { label: 'Data ↓', value: 'dateDsc' } },
  limit: { value: { label: '20', value: 20 } },
});

export const usersSearchFields = ({ fields }) => ({
  nameAndEmail: {
    ...fields.nameAndEmail,
    name: 'nameAndEmail',
    label: 'Nome ou email',
    placeholder: 'Digite',
  },
  farm: {
    ...fields.farm,
    name: 'farm',
    label: 'Fazenda',
    placeholder: 'Digite ou selecione',
    type: 'select',
    isSearchable: true,
  },
  roles: {
    ...fields.roles,
    name: 'roles',
    label: 'Permissões',
    placeholder: 'Selecione',
    type: 'select',
    options: [
      { label: 'Gestor', value: 'manager' }, 
      { label: 'Administrador', value: 'admin' }, 
      { label: 'Operador', value: 'operator' }, 
      { label: 'Técnico', value: 'technician' }, 
    ],
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
  { fieldLabel: 'Nome do Usuário', fieldType: 'name' },
  { fieldLabel: 'Email', fieldType: 'email' },
  { fieldLabel: 'Fazenda', fieldType: 'farm' },
  { fieldLabel: 'Permissão', fieldType: 'roles' },
  { fieldLabel: 'Status', fieldType: 'status' },
  { fieldLabel: '', fieldType: 'history' },
  { fieldLabel: '', fieldType: 'delete' },
]

export const searchGridTemplate = css`
  grid-template: ${`
    "nameAndEmail"
    "farm"
    "roles"
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
        "nameAndEmail farm"
        "roles status"
        "sortBy limit"
        "submitButton submitButton" 
        "generatePDF exportCSV"
      `};
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD }) {
      grid-template:
        "nameAndEmail nameAndEmail nameAndEmail nameAndEmail nameAndEmail farm farm farm farm farm . ."
        " status status status status roles roles roles roles . . . ."
        "sortBy sortBy sortBy sortBy limit limit limit . . . . ."
        "submitButton submitButton submitButton submitButton generatePDF generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV exportCSV "
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG }) {
      grid-template:
        "nameAndEmail nameAndEmail nameAndEmail farm farm farm status status status roles roles roles"
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
    "name name email email"
    "farm farm roles roles"
    "history history delete delete"
  ;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      grid-template:
        "status name email farm roles history delete"
      ;
      grid-template-columns: 80px 1fr 1fr 1fr 1fr 40px 40px;
    }
  }
`
