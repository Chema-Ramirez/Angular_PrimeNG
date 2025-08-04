import { Component } from '@angular/core';
import { Product } from './domain/productdomain';
import { ProductService } from './services/product';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-layout-dataview',
  standalone: true,
  imports: [
    DataView,
    Tag,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule,
  ],
  providers: [ProductService],
  templateUrl: './layout-dataview.html',
  styleUrl: './layout-dataview.css',
})
export class LayoutDataview {
  layout: 'list' | 'grid' = 'grid';

  products = signal<any>([]);

  options: ('list' | 'grid')[] = ['list', 'grid'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products.set([...data.slice(0, 12)]);
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
