import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-templatedriven-editor',
  imports: [
    FormsModule,
    MessageModule,
    ToastModule,
    ButtonModule,
    EditorModule,
  ],
  templateUrl: './templatedriven-editor.html',
  styleUrls: ['./templatedriven-editor.css'],
  standalone: true,
  providers: [MessageService],
})
export class TemplatedrivenEditor {
  messageService = inject(MessageService);

  text: string | undefined;

  onSubmit(form: any) {
    if (form.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Form Submitted',
        life: 3000,
      });
      form.resetForm();
    }
  }
}
