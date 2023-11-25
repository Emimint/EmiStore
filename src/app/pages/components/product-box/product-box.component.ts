import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl : './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false; 
  @Input() product: Product | undefined = {
    id: 1,
    title: "Puma",
    price: 50,
    category: 'shoes',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam!",
    image: "https://placehold.co/150",
  };
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }
}
