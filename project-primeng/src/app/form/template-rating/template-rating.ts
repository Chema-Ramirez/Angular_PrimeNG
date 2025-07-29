import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-template-rating',
  imports: [FormsModule, Rating],
  templateUrl: './template-rating.html',
  styleUrl: './template-rating.css',
  standalone: true,
})
export class TemplateRating {
  value!: number;
}
