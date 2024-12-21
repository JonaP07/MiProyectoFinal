import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Define las propiedades que usas en el template
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Define el método registrarse
  registrarse(): void {
    // Validación de campos vacíos
    if (!this.nombre || !this.email || !this.password || !this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Validación de contraseñas
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Mensaje de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: `Bienvenido ${this.nombre}`,
      timer: 3000,
      showConfirmButton: true
    });
  }
}
