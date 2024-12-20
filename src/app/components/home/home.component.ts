import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  producto: Producto[] = []; // Propiedad para almacenar los datos

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProducto()
      .subscribe({
        next: (producto: Producto[]) => { // Corregido: 'producto' en lugar de 'prducto' como parámetro
          this.producto = producto; // Asegúrate de que 'producto' existe y tiene la estructura esperada
          console.log(this.producto);
        },
        error: (err: any) => {
          console.error(err); // Sintaxis correcta para manejar errores
        },
        complete: () => {
          console.log('Completado'); // Mensaje de finalización
        }
      });
  }
}
