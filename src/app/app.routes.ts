import { Routes } from '@angular/router';
import { SoftwareComponent } from './projects/software/software.component';
import { HardwareComponent } from './projects/hardware/hardware.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'projects/hardware', 
        component: HardwareComponent 
    },
    { 
        path: 'projects/software', 
        component: SoftwareComponent 
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
