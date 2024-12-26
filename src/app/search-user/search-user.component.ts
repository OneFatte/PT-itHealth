import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-search-user',
  imports: [FormsModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent {

  userId: number = 0;

  constructor(private _http: ApiServiceService) { }

  sendId() {
    this._http.getUserById(this.userId).subscribe({
      next: (data) => {
        console.log(`Datos del usuario: ${this.userId}`, data);
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  this.userId = 0;
  }
}
