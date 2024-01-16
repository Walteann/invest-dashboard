import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Investment {
	icon: string;
	name: string;
	date: string;
	time: string;
	bonds: number;
	value: number;
	percentAmount: number;
}

@Component({
	selector: 'app-investments',
	templateUrl: './investments.component.html',
	styleUrls: ['./investments.component.css'],
	imports: [CommonModule],
	standalone: true
})

export class InvestmentsComponent {

	readonly INVESTMENTS: Investment[] = [
		{
			icon: 'uniliver.png',
			name: 'Uniliver',
			date: '07/11/2021',
			time: '21:14',
			bonds: 1402,
			value: 20.43,
			percentAmount: -4.27
		},
		{
			icon: 'tesla.png',
			name: 'Tesla',
			date: '01/12/2021',
			time: '11:54',
			bonds: 5377,
			value: 730.11,
			percentAmount: 38.27
		},
		{
			icon: 'monster.png',
			name: 'Monster',
			date: '01/12/2021',
			time: '16:02',
			bonds: 700,
			value: 13.11,
			percentAmount: 7.27
		},
		{
			icon: 'mcdonalds.png',
			name: 'McDonalds',
			date: '03/12/2021',
			time: '21:14',
			bonds: 5000,
			value: 78.03,
			percentAmount: -1.02
		}
	]
}
