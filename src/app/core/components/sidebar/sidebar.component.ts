import { CommonModule } from '@angular/common';
import {
	Component,
	ElementRef,
	HostListener,
	ViewChild
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from './sidebar.service';

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
	@ViewChild('aside') aside!: ElementRef;

	menuItem: MenuItem[] = [
		{
			name: 'Dashboard',
			icon: 'dashboard',
			active: true,
			url: 'dashboard',
		},
		{
			name: 'Exchange',
			icon: 'currency_exchange',
		},
		{
			name: 'Carteira',
			icon: 'account_balance_wallet',
			url: 'wallet',
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

	showSidebar = false;

	constructor(private sidebarService: SidebarService) {}

	ngOnInit(): void {
		this.sidebarService.showSidebar$.subscribe((show) => {
			console.log(show);
			if (this.aside) {
				if (this.aside.nativeElement.style.display === 'flex') {
					this.aside.nativeElement.style.display = 'none';
				} else {
					this.aside.nativeElement.style.display = 'flex';
				}
			}
		});
	}

	hiddenSidebar(): void {
		this.sidebarService.toggleSidebar();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event): void {
		this.sidebarHidden((event.target as Window).innerWidth);
	}

	private sidebarHidden(width: number): void {
		if (width <= 1024) {
			this.aside.nativeElement.style.display = 'none';
		} else {
			this.aside.nativeElement.style.display = 'flex';
		}
	}
}
