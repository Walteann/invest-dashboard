import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CryptorChartComponent } from '../../core/charts/cryptor-chart/cryptor-chart.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { RecentsTransactionsComponent } from './components/recents-transactions/recents-transactions.component';

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

interface FastPayment {
	name: string;
	value: number;
	color: string;
}

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [CommonModule, CryptorChartComponent, InvestmentsComponent, RecentsTransactionsComponent],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.css',
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
			cvv: 355,
		},
		{
			iconCurrency: 'ETH.png',
			currency: 'ETH',
			flagCart: 'visa.png',
			value: 4565.88,
			embossing: 'JOHN DOE',
			expiryDate: '06/30',
			cvv: 923,
		},
		{
			iconCurrency: 'EURO.png',
			currency: 'EUR',
			flagCart: 'master_card.png',
			value: 873.88,
			embossing: 'JOHN DOE',
			expiryDate: '05/28',
			cvv: 384
		},
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
			compared: 'em comparação com 134,23 no mês passado'
		},
	];

	fastPayments: FastPayment[] = [
		{
			name: 'Treino',
			value: 50,
			color: 'bg-primary',
		},
		{
			name: 'Internet',
			value: 90,
			color: 'bg-danger',
		},
		{
			name: 'Gás',
			value: 95,
			color: 'bg-purple',
		},
		{
			name: 'Cinema',
			value: 130,
			color: 'bg-primary',
		},
		{
			name: 'Educação',
			value: 334,
			color: 'bg-success',
		},
		{
			name: 'Eletricidade',
			value: 170,
			color: 'bg-dark',
		},
		{
			name: 'Comida',
			value: 798,
			color: 'bg-primary'
		},
	];
}
