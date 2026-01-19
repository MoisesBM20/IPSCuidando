import { Routes } from '@angular/router';
import { Hero} from './components/hero/hero';
import { Bussiness } from './components/bussiness/bussiness';
import { Questions } from './components/questions/questions';
import { Pqrs } from './components/pqrs/pqrs';
import { Testimonials } from './components/testimonials/testimonials';
import { SueroterapiaComponent } from './components/sueroterapia/sueroterapia';

export const routes: Routes = [
    { path: '', component: Hero, title: 'Inicio | C&E IPS' },
    { path: 'services', loadComponent: () => import('./components/services/services').then(m => m.Services) },
    { path: 'bussiness', component: Bussiness },
    { path: 'question', component: Questions },
    { path: 'pqrs', component: Pqrs },
    { path: 'testimonials', component: Testimonials },
    { path: 'sueroterapia', component: SueroterapiaComponent }
];