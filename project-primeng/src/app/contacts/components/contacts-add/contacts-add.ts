import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Contact, ContactService } from '../../services/contact';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contacts-add',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './contacts-add.html',
  styleUrl: './contacts-add.css',
})
export class ContactsAdd implements OnChanges {
  @Input() editContact?: Contact;

  @Output() created = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();

  form = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', Validators.required),
  });

  constructor(private svc: ContactService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editContact'] && this.editContact) {
      this.form.patchValue({
        id: this.editContact.id,
        name: this.editContact.name,
        email: this.editContact.email,
        phone: this.editContact.phone,
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    const id = this.form.get('id')!.value as number | null;
    const name = this.form.get('name')!.value as string;
    const email = this.form.get('email')!.value as string;
    const phone = this.form.get('phone')!.value as string;

    if (id) {
      this.svc
        .update({ id, name, email, phone })
        .subscribe(() => this.resetAndEmitUpdated());
    } else {
      this.svc
        .create({ name, email, phone })
        .subscribe(() => this.resetAndEmitCreated());
    }
  }

  private resetAndEmitCreated() {
    this.form.reset({ id: null, name: '', email: '', phone: '' });
    this.created.emit();
  }

  private resetAndEmitUpdated() {
    this.form.reset({ id: null, name: '', email: '', phone: '' });
    this.update.emit();
  }

  onCancel() {
    this.form.reset({ id: null, name: '', email: '', phone: '' });
    this.canceled.emit();
  }
}
