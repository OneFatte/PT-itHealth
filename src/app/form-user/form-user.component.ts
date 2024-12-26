import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../services/api-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  myForm: FormGroup;
  showModal: boolean = false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private _http: ApiServiceService) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern('[0-9]*')]],
      adress: ['', [Validators.required]]
    })
  }

  submit() {
    if (this.myForm.valid) {
      console.log('Formulario enviado:', this.myForm.value);
      this.showModal = true;
      this.isLoading = true;
      this._http.submitUserForm(this.myForm.value).subscribe({
        next: (response) => {
          console.log('Respuesta de la API:', response);
          this.showModal = true;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al enviar el formulario:', error);
          this.showModal = true;
          this.isLoading = false;
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  closeModal() {
    this.showModal = false;
    this.myForm.reset();
  }

}
