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

producto: Producto[] = []; // Propiedad para almacenar los datos
productoSub: Subscription | undefined

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoSub = this.productoService.getProducto()
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


  ngOnDestroy(): void {

    this.productoSub?.unsubscribe();
  }
}
