import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-templatedriven-knob',
  imports: [FormsModule, KnobModule, MessageModule, ToastModule, ButtonModule],
  templateUrl: './templatedriven-knob.html',
  styleUrl: './templatedriven-knob.css',
  standalone: true,
})
export class TemplatedrivenKnob {
  messageService = inject(MessageService);

  value: number = 15;

  formSubmitted: boolean = false;

  onSubmit(form: NgForm) {
    this.formSubmitted = true;

    if (!this.isInvalid(form.controls['knob'])) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form is submitted',
        life: 3000,
      });

      form.resetForm({ knob: 15 });

      this.formSubmitted = false;
    }
  }

  getErrorMessage(control: any): string | null {
    const value = control?.value;

    return value < 25
      ? 'Value must be greater than 25.'
      : value > 75
      ? 'Must be less than 75.'
      : null;
  }

  isInvalid(control: any): boolean {
    if (!control) return false;

    const value = control.value;

    const hasError = value < 25 || value > 75;

    return hasError && (this.formSubmitted || control.dirty);
  }
}
