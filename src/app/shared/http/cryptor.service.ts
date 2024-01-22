import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CryptorService {
	private readonly baseUrl = 'https://api.coingecko.com/api/v3';
	constructor(private http: HttpClient) {}

	getCryptorPriceChart(currency: string): Observable<any> {
		const endDate = new Date();
		const startDate = new Date();
		startDate.setFullYear(endDate.getFullYear() - 1); // Subtrai 1 ano

		const startTimestamp = Math.floor(startDate.getTime() / 1000);
		const endTimestamp = Math.floor(endDate.getTime() / 1000);

		const url = `${this.baseUrl}/coins/${currency}/market_chart`;
		const params = {
			vs_currency: 'brl',
			from: startTimestamp,
			to: endTimestamp,
			days: 365,
		};

		return this.http.get<any>(url, { params }).pipe(
			map((c) => {
				console.log(c);
				return this.reduceToMonthlyData(c.prices);
			})
		);
	}

	private reduceToMonthlyData(data: any[]): any[] {
		const reducedData: any[] = [];
		const monthlyMap = new Map<number, number>();

		for (const [timestamp, price] of data) {
			const date = new Date(timestamp);
			const yearMonthKey = date.getFullYear() * 100 + date.getMonth() + 1;

			if (!monthlyMap.has(yearMonthKey)) {
				monthlyMap.set(yearMonthKey, price);
			}
		}

		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		for (const [yearMonthKey, price] of monthlyMap) {
			const year = Math.floor(yearMonthKey / 100);
			const month = (yearMonthKey % 100) - 1; // Subtrai 1 porque os meses em JavaScript são de 0 a 11
			const monthName = monthNames[month];
			const formattedValue = [monthName, price];

			reducedData.push(formattedValue);
		}

		return reducedData;
	}
}
