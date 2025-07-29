import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-numberstars-rating',
  imports: [FormsModule, Rating],
  templateUrl: './numberstars-rating.html',
  styleUrl: './numberstars-rating.css',
  standalone: true,
})
export class NumberstarsRating {
  value: number = 5;
}
