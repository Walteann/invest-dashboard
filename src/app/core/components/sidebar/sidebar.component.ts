import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
	name: string;
	icon: string;
	active?: boolean;
}

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
	menuItem: MenuItem[] = [
		{
			name: 'Dashboard',
			icon: 'dashboard',
			active: true,
		},
		{
			name: 'Exchange',
			icon: 'currency_exchange',
		},
		{
			name: 'Carteira',
			icon: 'account_balance_wallet',
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
		},
	];
}
