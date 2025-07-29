import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-outline-button',
  imports: [ButtonModule],
  templateUrl: './outline-button.html',
  styleUrl: './outline-button.css',
  standalone: true,
})
export class OutlineButton {}
