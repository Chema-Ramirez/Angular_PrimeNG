import { Component, inject, signal } from '@angular/core';
import { Product } from './domain/productdomain';
import { ProductService } from './services/product';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-dataview',
  standalone: true,
  imports: [DataView, ButtonModule, Tag, CommonModule],
  providers: [ProductService],
  templateUrl: './basic-dataview.html',
  styleUrl: './basic-dataview.css',
})
export class BasicDataview {
  products = signal<any>([]);

  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      const d = data.slice(0, 5);
      this.products.set([...d]);
    });
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warn';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
