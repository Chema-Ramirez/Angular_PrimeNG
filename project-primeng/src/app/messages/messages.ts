import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-messages',
  imports: [Toast, ButtonModule, Ripple],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
  standalone: true,
  providers: [MessageService],
})
export class Messages {
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
    });
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: 'Message Content',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
    });
  }

  showContrast() {
    this.messageService.add({
      severity: 'contrast',
      summary: 'Error',
      detail: 'Message Content',
    });
  }

  showSecondary() {
    this.messageService.add({
      severity: 'secondary',
      summary: 'Secondary',
      detail: 'Message Content',
    });
  }
}
