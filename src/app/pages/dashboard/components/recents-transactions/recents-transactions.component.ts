import { Component, OnInit } from '@angular/core';

interface RecentTrasanction {
	icon: string;
	transactionName: string;
	className: string;
	date: string;
	flagCart: string;
	cartNumber: string;
	typeTransaction: string;
	value: number;
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
			transactionName: 'Música',
			className: 'bg-purple-primary',
			date: '20/11/2021',
			flagCart: 'visa.png',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 19.90,
		},
		{
			icon: 'shopping_bag',
			transactionName: 'Shopping',
			className: 'bg-primary',
			date: '19/11/2021',
			flagCart: 'visa.png',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 19.90,
		},
		{
			icon: 'restaurant',
			transactionName: 'Restaurante',
			className: 'bg-danger-light',
			date: '20/11/2021',
			flagCart: 'master_card.png',
			cartNumber: '*4452',
			typeTransaction: 'Cartão de Crédito',
			value: 15.90,
		},
		{
			icon: 'sports_esports',
			transactionName: 'Games',
			className: 'bg-danger-light',
			date: '15/11/2021',
			flagCart: 'visa.png',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 79.90,
		},
		{
			icon: 'medication',
			transactionName: 'Farmácia',
			className: 'bg-danger-light',
			date: '15/11/2021',
			flagCart: 'visa.png',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 79.90,
		},
	];

}
