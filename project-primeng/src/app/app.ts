import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Dashboard } from './dashboard/dashboard';
import { Filter } from './filter/filter';
import { Chart } from './chart/chart';
import { Messages } from './messages/messages';
import { Products } from './products/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    Dashboard,
    Filter,
    Chart,
    Messages,
    Products,
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
