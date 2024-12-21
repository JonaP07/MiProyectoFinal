import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Bienvenido",
      showConfirmButton: false,
      timer: 1500
    });
  }

}
