import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { ProductService, SortOrder } from '../../services/product'; // en product-search.ts
@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css'
})
export class ProductSearchComponent implements OnInit {
  searchControl = new FormControl('', { nonNullable: true });
  categoryControl = new FormControl('All', { nonNullable: true });
  sortControl = new FormControl<SortOrder>('none', { nonNullable: true });

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(startWith(''), debounceTime(300), distinctUntilChanged())
      .subscribe(term => this.productService.setSearchTerm(term));

    this.categoryControl.valueChanges
      .pipe(startWith('All'), distinctUntilChanged())
      .subscribe(category => this.productService.setCategory(category));

    this.sortControl.valueChanges
      .pipe(startWith('none' as SortOrder), distinctUntilChanged())
      .subscribe(order => this.productService.setSortOrder(order));
  }
}