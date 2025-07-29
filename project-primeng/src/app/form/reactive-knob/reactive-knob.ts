import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reactive-knob',
  imports: [FormsModule, Knob, ButtonModule],
  templateUrl: './reactive-knob.html',
  styleUrl: './reactive-knob.css',
  standalone: true,
})
export class ReactiveKnob {
  value: number = 0;
}
