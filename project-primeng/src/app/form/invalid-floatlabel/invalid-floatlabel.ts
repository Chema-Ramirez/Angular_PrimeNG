import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-invalid-floatlabel',
  imports: [FloatLabelModule, InputTextModule, FormsModule],
  templateUrl: './invalid-floatlabel.html',
  styleUrl: './invalid-floatlabel.css',
  standalone: true,
})
export class InvalidFloatlabel {
  value1: string | undefined;

  value2: string | undefined;

  value3: string | undefined;
}
