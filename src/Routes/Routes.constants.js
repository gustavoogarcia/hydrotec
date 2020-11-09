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

export const routes = [
  { path: '/cadernos-de-campo/novo', component: CampNotebook },
  { path: '/cadernos-de-campo/:id', component: CampNotebook },
  { path: '/cadernos-de-campo', component: CampNotebooks },
  { path: '/lotes-de-plantio/novo', component: PlantingLot },
  { path: '/lotes-de-plantio/:id', component: PlantingLots },
  { path: '/lotes-de-plantio', component: PlantingLots },
  { path: '/indicadores/maternidade', component: MaternityDetails },
  { path: '/indicadores/bercario', component: NurseryDetails },
  { path: '/indicadores/viveiro', component: VivariumDetails },
  { path: '/indicadores/fase-final', component: FinalPhaseDetails },
  { path: '/indicadores/ocupacao', component: OccupationDetails },
  { path: '/', component: Dashboard },
]
