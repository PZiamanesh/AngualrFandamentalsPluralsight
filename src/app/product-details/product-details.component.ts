import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!:IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(prd: IProduct): string {
    if (!prd) return '';
    return '/assets/images/robot-parts/' + prd.imageName;
  }

  buyBtnClicked(){
    this.buy.emit();
  }

  removeOldPrice(prd:IProduct) {
    if(prd.discount > 0)
      return 'strikeOldPrice';
    else
      return '';
  }
}
