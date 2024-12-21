import { ProductoService } from './../../services/producto.service'; // Servicio para obtener productos
import { Component, OnDestroy, OnInit } from '@angular/core'; // Componentes y ciclos de vida
import { ActivatedRoute } from '@angular/router'; // Para obtener parámetros de la ruta activa
import { Subscription } from 'rxjs'; // Para gestionar la suscripción a observables
import { Producto } from '../../models/producto.models'; // Modelo de datos Producto

@Component({
  selector: 'app-producto', // Selector para el componente
  templateUrl: './producto.component.html', // Plantilla HTML del componente
  styleUrl: './producto.component.css' // Estilos del componente
})
export class ProductoComponent implements OnInit, OnDestroy {

  // Definición de las propiedades del componente
  slug : string | undefined
  producto: Producto | undefined
  productoSub: Subscription | undefined

  galeria: Array<any> = [0]; //
  renderGaleria: Boolean = true;
  currentImg: string | undefined;

  // Inyección de dependencias en el constructor
  constructor(private  route: ActivatedRoute, private productoService: ProductoService){}

  // Método del ciclo de vida ngOnInit, se ejecuta cuando el componente es inicializado
  ngOnInit(): void {
    // Obtiene el 'slug' del producto desde los parámetros de la ruta
    this.slug = this.route.snapshot.params['id']

    // Se suscribe al servicio ProductoService para obtener los productos
    this.productoSub = this.productoService.getProducto()
    .subscribe( {
      // Si la suscripción es exitosa, se ejecuta esta función
      next: (productos: Producto[]) => {
        // Filtra el producto que tiene el 'slug' que coincide con el parámetro de la ruta
        this.producto = productos.filter(p => p.slug === this.slug)[0]

        // Asigna la primera imagen del producto a la variable currentImg
        this.currentImg = this.producto.imageUrl[0]
        console.log(this.currentImg)
      },
      // Si ocurre un error durante la suscripción, se ejecuta esta función
      error: (err: any) => {
        console.error('Error', err)
      }
    })
  }

  // Método del ciclo de vida ngOnDestroy, se ejecuta cuando el componente es destruido
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
