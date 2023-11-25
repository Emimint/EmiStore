import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

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

  constructor(private cartService: CartService, private http: HttpClient){}
  
    ngOnInit(): void {
      this.cartService.cart.subscribe((_cart: Cart) => {
        this.cart = _cart;
        this.dataSource = this.cart.items;
      });
    }
  
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onAddQty(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQty(item: CartItem): void {
    this.cartService.removeQty(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCheckOut(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51OG19HFiUmKMmOJeI9ESAwBw5HhKOWWet2g8q3rjO3EeD0A2N56k3ekx3bAEqw5ADmdWIkb9w5e90PpCYX1mzNGo00Kk08fLXx')
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }

}
