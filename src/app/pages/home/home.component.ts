import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';

const ROWS_HEIGHT: {[id: number]: number}  = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  currentCategory: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  productSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) { }
  
  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productSubscription)
      this.productSubscription.unsubscribe();
  }

  getProducts(): void{
    this.productSubscription = this.storeService.getAllProducts(this.count, this.sort, this.currentCategory)
      .subscribe(_products => {
        this.products = _products;
    });
  }
  onColumnsCountChange(colsNum: number): void{
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onSortOrderChange(sort: string): void{
    this.sort = sort;
    this.getProducts();
  }

  onItemShowChange(count: number): void {
    this.count = count.toString();
    this.getProducts();
  }

  onShowCategory(category: string): void {
    this.currentCategory = category;
    this.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }
}
