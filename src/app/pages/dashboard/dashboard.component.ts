import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CartCurrency {
	iconCurrency: string;
	currency: string;
	flagCart: string;
	value: number;
	embossing: string;
	expiryDate: string;
	cvv: number;
}

interface MonthlyReport {
	report: string;
	value: number;
	percent: number;
	compared: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
	cartsCurrency: CartCurrency[] = [
		{
			iconCurrency: 'BTC.png',
			currency: 'BTC',
			flagCart: 'visa.png',
			value: 320.42,
			embossing: 'JOHN DOE',
			expiryDate: '11/29',
			cvv: 355
		},
		{
			iconCurrency: 'ETH.png',
			currency: 'ETH',
			flagCart: 'visa.png',
			value: 4565.88,
			embossing: 'JOHN DOE',
			expiryDate: '06/30',
			cvv: 923
		},
		{
			iconCurrency: 'EURO.png',
			currency: 'EUR',
			flagCart: 'master_card.png',
			value: 873.88,
			embossing: 'JOHN DOE',
			expiryDate: '05/28',
			cvv: 384
		}
	];

	monthlyReports: MonthlyReport[] = [
		{
			report: 'Renda',
			value: 29.02,
			percent: 3.5,
			compared: 'em comparação com 23,23 no mês passado',
		},
		{
			report: 'Despesas',
			value: 39.02,
			percent: -6.5,
			compared: 'em comparação com 41,02 no mês passado',
		},
		{
			report: 'Cashback',
			value: 134.02,
			percent: 7.1,
			compared: 'em comparação com 87,03 no mês passado',
		},
		{
			report: 'Turnover',
			value: 120.42,
			percent: -13.8,
			compared: 'em comparação com 134,23 no mês passado',
		},
	];
}
