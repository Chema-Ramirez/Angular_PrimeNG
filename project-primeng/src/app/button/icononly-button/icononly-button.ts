import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-icononly-button',
  imports: [ButtonModule],
  templateUrl: './icononly-button.html',
  styleUrl: './icononly-button.css',
  standalone: true,
})
export class IcononlyButton {}
