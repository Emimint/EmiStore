import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items:[]});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void{
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open(`${item.name} added to cart`, 'Ok', { duration: 1000 });   
  }

  getTotal(items: Array<CartItem>): number {
    return items.reduce((acc, item) =>
      acc + item.quantity * item.price, 0);
  }

  removeQty(item: CartItem): void { 
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart && itemInCart.quantity > 0) {
      itemInCart.quantity -= 1;
      this.cart.next({ items });
      this._snackBar.open(`One unit of ${item.name} removed from cart`, 'Ok', { duration: 1000 }); 
    } else
      this.removeFromCart(item);
  }

  clearCart(): void{
    this.cart.next({ items: [] });
    this._snackBar.open('Your cart is now empty', 'Ok', { duration: 1000 }); 
  }

  removeFromCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemsInCart = items.filter((_item) => _item.id !== item.id);

    this.cart.next({ items: itemsInCart });

    this._snackBar.open(`${item.name} removed from cart`, 'Ok', { duration: 1000 }); 
  }

}
