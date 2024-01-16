import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
	name: string;
	icon: string;
	active?: boolean;
	url?: string;
}

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
	menuItem: MenuItem[] = [
		{
			name: 'Dashboard',
			icon: 'dashboard',
			active: true,
			url: 'dashboard'
		},
		{
			name: 'Exchange',
			icon: 'currency_exchange',
		},
		{
			name: 'Carteira',
			icon: 'account_balance_wallet',
			url: 'wallet'
		},
		{
			name: 'Transações',
			icon: 'payment',
		},
		{
			name: 'Gráficos',
			icon: 'pie_chart',
		},
		{
			name: 'Messagens',
			icon: 'message',
		},
		{
			name: 'Ajuda',
			icon: 'help_center',
		},
		{
			name: 'Configurações',
			icon: 'settings',
		}
	];
}
