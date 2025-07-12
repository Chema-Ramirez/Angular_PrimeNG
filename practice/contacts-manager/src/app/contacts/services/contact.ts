//Injectable marca a esta clase como un servicio // Que puede ser inyectado en otros componentes o servicios 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Definimos la estructura que debe tener un contacto
export interface Contact{
  id: number;
  name: string;
  email: string;
  phone: string;
}

//Decorador que indica que este servicio se provee a toda la aplicacion (singleton)
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private API = 'http://localhost:3000/contacts';
  //Inyectamos hhtpClient para poder hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  //Método para obtener la lista completa de contactos
  //Devuelve un observable que emitira un array de Contactos
  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.API);
  }


//Método para crear un nuevo contacto
//Recibe un contacto sin id (nuestro backend asignará un id por defecto)
//Devuelve un observavle que emitirá el contacto creado (Observable nos permite verificar si hemos recibido alguna respuesta)
create(contact: Omit<Contact, 'id'>): Observable<Contact>{
  return this.http.post<Contact>(this.API, contact);
  }

  //Método para actualizar un contacto existente
  //Recibe un contacto completo con su id y nos devuelve uno actualizado
  update(contact: Contact): Observable<Contact>{
    //Hacemos una peticion PUT a la URL con el id del contacto
    return this.http.put<Contact>(
      `${this.API}/${contact.id}`, //URL con el ID del contacto
        contact //datos a actualizar
    );
  }

  //Método para eliminar un contacto
  delete(id:number): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}


