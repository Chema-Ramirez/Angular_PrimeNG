import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-filter',
  imports: [FormsModule, SliderModule, SelectButtonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
  standalone: true,
})
export class Filter {
  filter: number = 0;

  filterValues: number[] = [100, 100, 0];

  filterOptions: any = [
    { label: 'Contrast', value: 0 },
    { label: 'Brightness', value: 1 },
    { label: 'Sepia', value: 2 },
  ];

  get filterStyle() {
    return {
      filter: `contrast(${this.filterValues[0]}%) brightness(${this.filterValues[1]}%) sepia(${this.filterValues[2]}%)`,
    };
  }
}
