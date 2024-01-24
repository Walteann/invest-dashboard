import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './core/components/nav/nav.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { SplashScreenComponent } from './core/components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
	CommonModule,
	RouterOutlet,
	NavComponent,
	SidebarComponent,
	SplashScreenComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
