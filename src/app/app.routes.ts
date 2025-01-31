import { Routes } from '@angular/router';
import { SoftwareComponent } from './our-products/software/software.component';
import { HardwareComponent } from './our-products/hardware/hardware.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'products/it-services', 
        component: HardwareComponent 
    },
    { 
        path: 'products/software-solutions', 
        component: SoftwareComponent 
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
