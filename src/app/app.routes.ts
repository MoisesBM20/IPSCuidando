import { Routes } from '@angular/router';
import { Hero} from './components/hero/hero';
import {Services} from './components/services/services';
import { Bussiness } from './components/bussiness/bussiness';
import { Questions } from './components/questions/questions';
import { Pqrs } from './components/pqrs/pqrs';
import { Testimonials } from './components/testimonials/testimonials';

export const routes: Routes = [
    { path: '', component: Hero, title: 'Inicio | C&E IPS' },
    { path: 'services', component: Services },
    { path: 'bussiness', component: Bussiness },
    { path: 'question', component: Questions },
    { path: 'pqrs', component: Pqrs },
    { path: 'testimonials', component: Testimonials },
];