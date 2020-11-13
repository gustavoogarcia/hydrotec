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
    { label: 'Plano', path: '/planos' },
    { label: 'Fazenda', path: '/fazendas' },
    { label: 'Usuário', path: '/usuarios' },
    { label: 'Estufa', path: '/estufas' },
    { label: `Caixa D'água`, path: '/caixas-dagua' },
    { label: 'Solução nutritiva', path: '/solucoes-nutritivas' },
    { label: 'Insumo', path: '/insumos' },
    { label: 'Hortaliça', path: '/hortalicas' },
    { label: 'Receita', path: '/receitas' },
    { label: 'Praga', path: '/pragas' },
    { label: 'Grupo', path: '/grupos' },
    { label: 'Fabricante', path: '/fabricantes' },
  ] },
  { label: 'Caderno de campo', icon: NotebookIcon, color: '#419645', path: '/cadernos-de-campo' },
  { label: 'Lotes de plantio', icon: PlantingLotsIcon, color: '#8bc53f', path: '/lotes-de-plantio' },
  { label: 'Controle de EC & PH', icon: MeasureIcon, color: '#13739e', path: '/controles-de-ph-&-ec' },
  { label: 'Lista de atividades', icon: ListIcon, color: '#00a1a5' },
  { label: 'Relatórios', icon: ReportsIcon, color: '#419645', childs: [
    { label: 'Previsão de colheita' },
    { label: 'Caderno de campo' },
  ] },
]