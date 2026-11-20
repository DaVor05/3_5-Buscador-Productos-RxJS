import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DashboardSection = 'dashboard' | 'form' | 'catalog';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  @Input() activeSection: DashboardSection = 'dashboard';
  @Input() isOpen = true;
  @Output() selectSection = new EventEmitter<DashboardSection>();
}