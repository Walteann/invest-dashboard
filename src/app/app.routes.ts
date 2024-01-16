import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'dashboard',
		loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
	},
	{
		path: 'wallet',
		loadChildren: () => import('./pages/wallet/wallet.routes').then(m => m.WALLET_ROUTES)
	},
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	}
];
