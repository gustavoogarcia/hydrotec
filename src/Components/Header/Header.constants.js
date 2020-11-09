import DashboardIcon from '../../images/DashboardIcon';
import RegisterIcon from '../../images/RegisterIcon';
import ReportsIcon from '../../images/ReportsIcon';
import PlantingLotsIcon from '../../images/PlantingLotsIcon';
import NotebookIcon from '../../images/NotebookIcon';
import MeasureIcon from '../../images/MeasureIcon';
import ListIcon from '../../images/ListIcon';

export const  navItems = [
  { label: 'Dashboard', icon: DashboardIcon, color: '#FFD255', path: '/' },
  { label: 'Cadastros', icon: RegisterIcon, color: '#00a1a5', childs: [
    { label: 'Plano' },
    { label: 'Fazenda' },
    { label: 'Usuário' },
    { label: 'Estufa' },
    { label: `Caixa D'água` },
    { label: 'Solução nutritiva' },
    { label: 'Insumo' },
    { label: 'Hortaliça' },
    { label: 'Receita' },
    { label: 'Praga' },
    { label: 'Grupo' },
    { label: 'Fabricante' },
  ] },
  { label: 'Caderno de campo', icon: NotebookIcon, color: '#419645', path: '/cadernos-de-campo' },
  { label: 'Lotes de plantio', icon: PlantingLotsIcon, color: '#8bc53f', path: '/lotes-de-plantio' },
  { label: 'Controle de EC & PH', icon: MeasureIcon, color: '#13739e' },
  { label: 'Lista de atividades', icon: ListIcon, color: '#00a1a5' },
  { label: 'Relatórios', icon: ReportsIcon, color: '#419645', childs: [
    { label: 'Previsão de colheita' },
    { label: 'Caderno de campo' },
  ] },
]