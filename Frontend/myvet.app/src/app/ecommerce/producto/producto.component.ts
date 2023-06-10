import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/productos.model';
import { DetalleProductoService } from 'src/servicios/detalle-producto.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent{

  @Input() objetoProducto!:ProductModel; 

constructor(private dp: DetalleProductoService, private router: Router, private location: Location) {}

crearDetalle(producto: ProductModel): void {
  this.dp.setDetail(producto)
  this.router.navigate(['/petshop/producto', producto.id])
}
}
