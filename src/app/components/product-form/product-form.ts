import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent {
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);

  savedMessage = false;

  productForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    category: ['Muebles', Validators.required],
    price: [50, [Validators.required, Validators.min(1)]],
    description: ['', [Validators.required, Validators.minLength(5)]],
    image: ['']
  });

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const val = this.productForm.getRawValue();
    this.productService.addProduct({
      name: val.name,
      category: val.category,
      price: Number(val.price),
      description: val.description,
      image: val.image || ''
    });

    this.productForm.reset({
      name: '',
      category: 'Muebles',
      price: 50,
      description: '',
      image: ''
    });

    this.savedMessage = true;
    setTimeout(() => (this.savedMessage = false), 2500);
  }
}