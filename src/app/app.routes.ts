import { Routes } from '@angular/router';
import { Hero} from './components/hero/hero';

export const routes: Routes = [
    { path: '', component: Hero, title: 'Inicio | C&E IPS' },
    // Aquí puedes añadir más rutas en el futuro
    // { path: 'servicios', component: ServiciosComponent },
];