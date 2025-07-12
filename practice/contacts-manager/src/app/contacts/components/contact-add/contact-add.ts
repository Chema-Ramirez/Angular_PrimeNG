import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Contact, ContactService } from '../../services/contact';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-add',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './contact-add.html',
  styleUrls: ['./contact-add.css'],
})
export class ContactAdd implements OnChanges {
  //Reacciona a los cambios en @input
  // Recibe el contacto a editar desde el componente padre
  @Input() editContact?: Contact;

  //Eventos que se emiten cuando Crea, Actualiza o Cancela el formulario
  @Output() created = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  //Definimos el formulario reactivo con sus campos y validaciones
  form = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', Validators.required),
  });

  //Inyectamos el servicio que maneja la llamada HTTP
  constructor(private svc: ContactService) { }

  //Metodo que se ejecuta automaticamente si cambia el valor @Input editContact

  ngOnChanges(changes: SimpleChanges): void {
    //Si se detecta un cambio en editContact y tiene datos, se actualiza el formulario
    if (changes['editContact'] && this.editContact) {
      this.form.patchValue({
        id: this.editContact.id,
        name: this.editContact.name,
        email: this.editContact.email,
        phone: this.editContact.phone,
      });
    }
  }

  //Metodo que se ejecuta al enviar el formulario
  onSubmit() {
    //Si el formulario no es válido
    if (this.form.invalid) return;
    //Obtenemos los valores del formulario
    const id = this.form.get('id')!.value as number | null;
    const name = this.form.get('name')!.value as string;
    const email = this.form.get('email')!.value as string;
    const phone = this.form.get('phone')!.value as string;

    //Si hay ID, actualizamos un contacto existente
    if (id) {
      this.svc
        .update({ id, name, email, phone })
        .subscribe(() => this.resetAmdEmitUpdated());
    } else {
      //Si no hay ID , es un nuevo usuario
      this.svc
        .create({ name, email, phone })
        .subscribe(() => this.resetAndEmitCreated());
    }
  }

  //Resetea y Emite evento de actualización
  private resetAmdEmitUpdated() {
    this.form.reset({ id: null, name: '', email: '', phone: '' });
    this.update.emit();
  }

  //Resetea el formulario y Emite evento de creación
  private resetAndEmitCreated() {
    this.form.reset({ id: null, name: '', email: '', phone: '' });
    this.created.emit(); //Notifica al componente
  }

  //Cuando cancele el formulario
  onCancel() {
    this.form.reset({ id: null, name: '', email: '', phone: '' });
    this.cancel.emit();
  }
}
