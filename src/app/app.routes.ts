import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	}
];
