import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) { }

  getProducto(): Observable<Producto[]> {
    // Usa backticks (`) para interpolar correctamente el valor de this.ApiUrl
    return this.http.get<Producto[]>(`${this.ApiUrl}`);
  }
}
