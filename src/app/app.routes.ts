import { Routes } from '@angular/router';

import { AboutComponent } from './src/app/pages/about/about.component';
import { HomeComponent } from './src/app/pages/home/home.component';
import { ContactComponent } from './src/app/pages/contact/contact.component';
import { DemosComponent } from './src/app/pages/demos/demos.component';
import { NotFoundComponent } from './src/app/pages/not-found/not-found.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact' , component: ContactComponent },
    { path: 'demos' , component: DemosComponent },
    { path: '**', component: NotFoundComponent }
];
