import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  product : IProduct

  constructor(){
    this.product = {
      id:2,
      description: "a friendly robot for domestic use",
      name: "Friendly Robot",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 945.0,
      discount: 0.2,
    }
  }

  getImageUrl(product:IProduct) : string {
    return "/assets/images/robot-parts/" + product.imageName
  }
}
