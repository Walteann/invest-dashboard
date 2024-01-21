import { Component, OnInit } from '@angular/core';

interface RecentTrasanction {
	icon: string;
	iconClass: string;
	transactionName: string;
	className: string;
	date: string;
	flagCart: string;
	cartNumber: string;
	typeTransaction: string;
	value: number;
	flagCartClass: string;
}

@Component({
	selector: 'app-recents-transactions',
	templateUrl: './recents-transactions.component.html',
	styleUrls: ['./recents-transactions.component.scss'],
	standalone: true
})

export class RecentsTransactionsComponent {

	recentsTransactions: RecentTrasanction[] = [
		{
			icon: 'headphones',
			iconClass: 'purple',
			transactionName: 'Música',
			className: 'bg-purple-light',
			date: '20/11/2021',
			flagCart: 'visa.png',
			flagCartClass: 'bg-danger',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 19.90,
		},
		{
			icon: 'shopping_bag',
			iconClass: 'purple',
			transactionName: 'Shopping',
			className: 'bg-purple-light',
			date: '19/11/2021',
			flagCart: 'visa.png',
			flagCartClass: 'bg-primary',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 19.90,
		},
		{
			icon: 'restaurant',
			iconClass: 'success',
			transactionName: 'Restaurante',
			className: 'bg-success-light',
			date: '20/11/2021',
			flagCart: 'master_card.png',
			flagCartClass: 'bg-dark',
			cartNumber: '*4452',
			typeTransaction: 'Cartão de Crédito',
			value: 15.90,
		},
		{
			icon: 'sports_esports',
			iconClass: 'danger',
			transactionName: 'Games',
			className: 'bg-danger-light',
			date: '15/11/2021',
			flagCart: 'visa.png',
			flagCartClass: 'bg-danger',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 79.90,
		},
		{
			icon: 'medication',
			iconClass: 'danger',
			transactionName: 'Farmácia',
			className: 'bg-danger-light',
			date: '15/11/2021',
			flagCart: 'visa.png',
			flagCartClass: 'bg-danger',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 79.90,
		},
	];

}
