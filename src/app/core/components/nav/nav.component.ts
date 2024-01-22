import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { ThemeChangeService } from '../../../shared/services/theme-change.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

	@ViewChild('lightMode') lightMode!: ElementRef;
	@ViewChild('darkMode') darkMode!: ElementRef;

	constructor(public sidebarService: SidebarService, private themeChangeService: ThemeChangeService) {}

	changeTheme(): void {
		this.themeChangeService.toggleBodyClass('dark-theme');

		this.lightMode.nativeElement.classList.toggle('active');
		this.darkMode.nativeElement.classList.toggle('active');
	}

}
