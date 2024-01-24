import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CryptorService } from '../../../shared/http/cryptor.service';
import { HttpClientModule } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const MOCK_CHAT_CRYPTOR = {
	months: [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	],
	BTC: [29374, 33537, 49631, 59095, 57095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
	ETH: [31500, 4100, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
}

@Component({
	selector: 'app-cryptor-chart',
	templateUrl: './cryptor-chart.component.html',
	standalone: true,
	imports: [HttpClientModule],
	styleUrls: ['./cryptor-chart.component.css'],
})
export class CryptorChartComponent implements AfterViewInit {
	private chart: any;

	constructor(
		private el: ElementRef,
		private cryptorService: CryptorService
	) {
		Chart.register(...registerables);
	}
	ngAfterViewInit(): void {
		this.getCryptors();
	}

	// TODO: Trocar por Signs
	private getCryptors(): void {
		forkJoin([
			this.cryptorService.getCryptorPriceChart('bitcoin'),
			this.cryptorService.getCryptorPriceChart('ethereum'),
		]).subscribe(([bitcoin, ethereum]: [any, any]) => {
			this.createChart(
				bitcoin.map((btc: any) => btc[0]),
				bitcoin.map((btc: any) => btc[1]),
				ethereum.map((btc: any) => btc[1])
			);
		}, err=> {
			console.error(err);
			this.createChart(
				MOCK_CHAT_CRYPTOR.months,
				MOCK_CHAT_CRYPTOR.BTC,
				MOCK_CHAT_CRYPTOR.ETH
			);
		});
	}

	private createChart(months: string[], btcs: number[], eths: number[]): void {
		const canvas: HTMLCanvasElement | null =
			this.el.nativeElement.querySelector('#chartCanvas');

		if (!canvas) {
			console.error('Canvas element not found');
			return;
		}

		const ctx = canvas.getContext('2d');

		if (!ctx) {
			console.error('2D context not available');
			return;
		}

		this.chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: months,
				datasets: [
					{
						label: 'BTC',
						data: btcs,
						borderColor: 'red',
						borderWidth: 2,
					},
					{
						label: 'ETH',
						data: eths,
						borderColor: 'blue',
						borderWidth: 2,
					},
				],
			},
			options: {
				responsive: true,
			},
		});
	}
}
