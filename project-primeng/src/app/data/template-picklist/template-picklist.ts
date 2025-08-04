import { Component, ChangeDetectorRef } from '@angular/core';
import { Product } from './domain/productdomain';
import { ProductService } from './services/productservice';
import { PickListModule } from 'primeng/picklist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-picklist',
  standalone: true,
  imports: [PickListModule, CommonModule],
  providers: [ProductService],
  templateUrl: './template-picklist.html',
  styleUrl: './template-picklist.css',
})
export class TemplatePicklist {
  sourceProducts!: Product[];

  targetProducts!: Product[];

  constructor(
    private carService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.carService.getProducts().then((products: Product[]) => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
    });
    this.targetProducts = [];
  }
}
