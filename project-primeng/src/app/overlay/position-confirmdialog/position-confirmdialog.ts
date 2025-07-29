import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-position-confirmdialog',
  standalone: true,
  imports: [ConfirmDialog, ButtonModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './position-confirmdialog.html',
  styleUrl: './position-confirmdialog.css',
})
export class PositionConfirmdialog {
  position:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'center'
    | 'topleft'
    | 'topright'
    | 'bottomleft'
    | 'bottomright' = 'center';

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirmPosition(
    position:
      | 'left'
      | 'right'
      | 'top'
      | 'bottom'
      | 'center'
      | 'topleft'
      | 'topright'
      | 'bottomleft'
      | 'bottomright'
  ) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Are you sure you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      rejectButtonStyleClass: 'p-button-text',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        text: true,
      },
      acceptButtonProps: {
        label: 'Save',
        text: true,
      },
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Request submitted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Process incomplete',
          life: 3000,
        });
      },
      key: 'positionDialog',
    });
  }
}
