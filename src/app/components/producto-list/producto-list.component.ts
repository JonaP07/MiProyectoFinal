import { ProductoService } from './../../services/producto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit, OnDestroy {

  // Propiedad para almacenar la lista de productos obtenida desde el servicio.
  producto: Producto[] = [];

  // Propiedad para manejar la suscripción al observable del servicio.
  productoSub: Subscription | undefined;

  constructor(private productoService: ProductoService) {
    // Inyección de dependencias: Se recibe el servicio de productos para acceder a sus métodos.
  }

  // Ciclo de vida `OnInit`: Se ejecuta cuando el componente es inicializado.
  ngOnInit(): void {
    // Suscripción al servicio para obtener los productos.
    this.productoSub = this.productoService.getProducto()
      .subscribe({
        // `next`: Maneja los datos obtenidos.
        next: (producto: Producto[]) => {
          this.producto = producto; // Almacena los productos en la propiedad local.
          console.log(this.producto); // Imprime los datos en la consola para depuración.
        },
        error: (err: any) => {
          console.error(err); // Imprime el error en la consola.
        },
        complete: () => {
          console.log('Completado');
        }
      });
  }

  ngOnDestroy(): void {
  }
}
