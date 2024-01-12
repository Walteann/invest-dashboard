import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
	selector: 'app-cryptor-chart',
	templateUrl: './cryptor-chart.component.html',
	standalone: true,
	styleUrls: ['./cryptor-chart.component.css']
})

export class CryptorChartComponent implements AfterViewInit {

	private chart: any;

	constructor(private el: ElementRef) {
		Chart.register(...registerables);
	}
	ngAfterViewInit(): void {
		this.createChart();
	}

	private createChart(): void {
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
				labels: [
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
				datasets: [
					{
						label: 'BTC',
						data: [29374, 33537, 49631, 59095, 57095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
						borderColor: 'red',
						borderWidth: 2
					},
					{
						label: 'ETH',
						data: [31500, 4100, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
						borderColor: 'blue',
						borderWidth: 2
					},
				],
			},
			options: {
				responsive: true,
			},
		});
	}

}
