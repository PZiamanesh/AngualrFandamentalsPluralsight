import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:IProduct[] = [];

  constructor() { }

  add(prd:IProduct){
    this.cart.push(prd);
    console.log(`product ${prd.name} added to cart`);
  }
}
