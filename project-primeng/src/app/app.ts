import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { Filter } from './filter/filter';
import { Chart } from './chart/chart';
import { Messages } from './messages/messages';
import { Products } from './products/products';
import { ControlledGalleria } from './media/controlled-galleria/controlled-galleria';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    Dashboard,
    Filter,
    Chart,
    Messages,
    Products,
    ControlledGalleria,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly activeView = signal<
    'dashboard' | 'messages' | 'chart' | 'products' | 'filter'
  >('dashboard');

  setActiveView(
    view: 'dashboard' | 'messages' | 'chart' | 'products' | 'filter'
  ) {
    this.activeView.set(view);
  }
}
