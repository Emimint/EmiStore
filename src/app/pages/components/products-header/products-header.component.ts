import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: ``
})
export class ProductsHeaderComponent {
  sort : string = 'desc';
  itemsShowCount : number = 15;

  onSortUpdated(newSort: string): void{
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void{
    this.itemsShowCount = count;
  }
}
