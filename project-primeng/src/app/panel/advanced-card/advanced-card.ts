import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-advanced-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './advanced-card.html',
  styleUrl: './advanced-card.css',
})
export class AdvancedCard {}
