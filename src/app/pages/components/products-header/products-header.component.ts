import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: ``
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() sortOrderChange = new EventEmitter<string>();
  @Output() itemShowChange = new EventEmitter<number>();
  sort : string = 'desc';
  itemsShowCount : number = 15;

  onSortUpdated(newSort: string): void{
    this.sort = newSort;
    this.sortOrderChange.emit(newSort);
  }

  onItemsUpdated(count: number): void{
    this.itemsShowCount = count;
    this.itemShowChange.emit(count);
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
