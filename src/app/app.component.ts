import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiServiceService } from './services/api-service.service';
import { FormUserComponent } from "./form-user/form-user.component";
import { SearchUserComponent } from "./search-user/search-user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchUserComponent, FormUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PTitHealth';

  userId: number = 0;

  constructor(private _http: ApiServiceService) { }

  getID($event: number) {
    this.userId = $event
  }

  ngOnInit() {
    this._http.getFirstFiveUsers().subscribe({
      next: (data) => {
        console.log('Datos de la API:', data);
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }
}
