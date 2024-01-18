import { Component, OnInit } from '@angular/core';

interface RecentTrasanction {
	icon: string;
	transactionName: string;
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
			date: '20/11/2021',
			flagCart: 'visa.png',
			cartNumber: '*2757',
			typeTransaction: 'Cartão de Crédito',
			value: 19.90,
		}
	];

}
