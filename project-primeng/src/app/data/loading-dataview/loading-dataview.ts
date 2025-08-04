import { Component } from '@angular/core';
import { Product } from './domain/productdomain';
import { ProductService } from './services/product';
import { DataView } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { Skeleton } from 'primeng/skeleton';
import { SelectButton } from 'primeng/selectbutton';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-loading-dataview',
  standalone: true,
  imports: [
    DataView,
    CommonModule,
    Skeleton,
    SelectButton,
    FormsModule,
    TagModule,
    ButtonModule,
  ],
  providers: [ProductService],
  templateUrl: './loading-dataview.html',
  styleUrl: './loading-dataview.css',
})
export class LoadingDataview {
  layout: 'grid' | 'list' = 'grid';

  products = signal<Product[]>([]);

  options: string[] = ['list', 'grid'];

  isLoading = signal(true);

  constructor(private productService: ProductService) {}

  ngOnInit() {
    setTimeout(() => {
      this.productService.getProducts().then((data) => {
        this.products.set(data.slice(0, 12));
        this.isLoading.set(false);
      });
    }, 8000);
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null;
    }
  }

  counterArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
