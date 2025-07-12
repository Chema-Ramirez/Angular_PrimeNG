import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ContactAdd } from '../contact-add/contact-add';
import { Contact, ContactService } from '../../services/contact';
import { signal } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, ContactAdd],
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactList implements OnInit {
  //Signal nos va a ayudar a almacenar la lista de contactos
  contacts = signal<Contact[]>([]);

  //Signal que indica si estamos editando un contacto(o creando uno nuevo)
  editing = signal<Contact | undefined>(undefined);

  //Constructor: se ejecuta al crear la instancia del componente
  constructor(private svc : ContactService){}

  ngOnInit(): void {
      this.load(); //Cargamos los contactos del componente
  }

  //Metodo para cargar todos los contactos del servicio
  load(){
    this.svc.getAll().subscribe(list =>{
      console.log('[DEBUG] contacts loaded:', list);
    })
  }

  //Editar
  onEdit(contact: Contact){
    this.editing.set(contact); //Establece el contacto actual con el que se esta editando
  }

  //Metodo que llama al hacer clic en 'nuevo contacto'
  newContact(){
    //Creamos un nuevo objeto vacio 
    this.editing.set({id: undefined!, name: '', email:'', phone:''})
  }
  
  //Metodo que se ejecuta después de crear, actualizar o cancelar formulario
  onSaved(){
  this.editing.set(undefined); //Ocultar formulario
  this.load()
  }

  //Metodo para eliminar un contacto
  delete(id: number | null){
    if(id == null){
      console.warn('[DEBUG] delete() aborted: id is null or undefined');
      return; //Salimos si el ID ni es valido
    }

  //Mostramos un cuadro de confirmacion antes de borrar
  if(confirm('¿Desea borrar contacto?')){
    //Llamar al servicio para eliminar el contacto
    this.svc.delete(id).subscribe({
      next:()=>this.load(), //Si todo va bien, recargamos la lista
      error: err => console.error('Error al eliminar contacto:', err)
      })
    }
  }
}
