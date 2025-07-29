import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login-divider',
  imports: [DividerModule, ButtonModule, InputTextModule],
  templateUrl: './login-divider.html',
  styleUrl: './login-divider.css',
  standalone: true,
})
export class LoginDivider {}
