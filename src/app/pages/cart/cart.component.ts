import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  
  cart: Cart = {
    items: [
      { id: 1, product: "https://placehold.co/150", name: "Puma", price: 50, quantity: 2 },
      { id: 2, product: "https://placehold.co/150", name: "Adidas", price: 25, quantity: 3 },
      { id: 3, product: "https://placehold.co/150", name: "Nike", price: 15, quantity: 1 },
      { id: 4, product: "https://placehold.co/150", name: "Reebok", price: 8, quantity: 4 },
      { id: 5, product: "https://placehold.co/150", name: "Under Armour", price: 30, quantity: 2 },
      { id: 6, product: "https://placehold.co/150", name: "Columbia", price: 80, quantity: 1 },
      { id: 7, product: "https://placehold.co/150", name: "North Face", price: 60, quantity: 1 },
      { id: 8, product: "https://placehold.co/150", name: "Oakley", price: 20, quantity: 2 },
      { id: 9, product: "https://placehold.co/150", name: "Hydro Flask", price: 15, quantity: 1 },
      { id: 10, product: "https://placehold.co/150", name: "Sony", price: 100, quantity: 1 },
    ]
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(private cartService: CartService){}
  
    ngOnInit(): void {
      this.dataSource = this.cart.items;
    }
  
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  removeItem(item: CartItem): void {
    this.dataSource = this.dataSource.filter(i => i!== item);
  }

  emptyCart(): void {
    this.dataSource = [];
  }

}
