import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filterBy: string = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((resultData) => (this.products = resultData));
  }

  filtredProducts(): IProduct[] {
    return this.filterBy === ''
      ? this.products
      : this.products.filter((p: any) => p.category === this.filterBy);
  }

  addToCart(prd: IProduct) {
    this.cartService.add(prd);
  }
}
