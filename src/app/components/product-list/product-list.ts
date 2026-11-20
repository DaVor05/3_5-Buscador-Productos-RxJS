import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  viewMode: 'cards' | 'table' = 'cards';

  constructor(public productService: ProductService) {}

  onDelete(id: number): void {
    this.productService.deleteProduct(id);
  }
}