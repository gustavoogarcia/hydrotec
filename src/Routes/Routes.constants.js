import Dashboard from '../Pages/Dashboard';
import MaternityDetails from '../Pages/MaternityDetails';
import NurseryDetails from '../Pages/NurseryDetails';
import VivariumDetails from '../Pages/VivariumDetails';
import FinalPhaseDetails from '../Pages/FinalPhaseDetails';
import OccupationDetails from '../Pages/OccupationDetails';
import PlantingLots from '../Pages/PlantingLots';
import PlantingLot from '../Pages/PlantingLot';
import CampNotebooks from '../Pages/CampNotebooks';
import CampNotebook from '../Pages/CampNotebook';
import Measures from '../Pages/Measures';
import Measure from '../Pages/Measure';
import Plans from '../Pages/Plans';
import Farms from '../Pages/Farms';
import Users from '../Pages/Users';
import NutritiveSolutions from '../Pages/NutritiveSolutions'
import Input from '../Pages/Input'
import Greeneries from '../Pages/Greeneries'
import Recipe from '../Pages/Recipe'
import Pest from '../Pages/Pest'
import Group from '../Pages/Group'
import Manufacturer from'../Pages/Manufacturer'
import Greenhouse from '../Pages/Greenhouse'
import WaterTank from '../Pages/WaterTank'


export const routes = [
  { path: '/solucoes-nutritivas', component: NutritiveSolutions },
  { path: '/caixas-dagua', component: WaterTank },
  { path: '/estufas', component: Greenhouse },
  { path: '/fabricantes', component: Manufacturer},
  { path: '/pragas', component: Pest} ,
  { path: '/grupos', component: Group} ,
  { path: '/receitas', component: Recipe },
  { path: '/hortalicas', component: Greeneries },
  { path: '/usuarios', component: Users },
  { path: '/insumos', component: Input },
  { path: '/fazendas', component: Farms },
  { path: '/planos', component: Plans },
  { path: '/cadernos-de-campo/novo', component: CampNotebook },
  { path: '/cadernos-de-campo/:id', component: CampNotebook },
  { path: '/cadernos-de-campo', component: CampNotebooks },
  { path: '/controle-de-ec-e-ph/novo', component: Measure },
  { path: '/controle-de-ec-e-ph/:id', component: Measure },
  { path: '/controle-de-ec-e-ph', component: Measures },
  { path: '/lotes-de-plantio/novo', component: PlantingLot },
  { path: '/lotes-de-plantio/:id', component: PlantingLot },
  { path: '/lotes-de-plantio', component: PlantingLots },
  { path: '/indicadores/maternidade', component: MaternityDetails },
  { path: '/indicadores/bercario', component: NurseryDetails },
  { path: '/indicadores/viveiro', component: VivariumDetails },
  { path: '/indicadores/fase-final', component: FinalPhaseDetails },
  { path: '/indicadores/ocupacao', component: OccupationDetails },
  { path: '/', component: Dashboard },
]
