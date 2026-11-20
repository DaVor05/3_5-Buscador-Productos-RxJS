import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { SidebarComponent, DashboardSection } from './components/sidebar/sidebar';
import { StatisticsComponent } from './components/statistics/statistics';
import { ProductFormComponent } from './components/product-form/product-form';
import { ProductSearchComponent } from './components/product-search/product-search';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    StatisticsComponent,
    ProductFormComponent,
    ProductSearchComponent,
    ProductListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  activeSection: DashboardSection = 'dashboard';
  sidebarOpen = true;
}