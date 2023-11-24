import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ["Shoes", "Sports"];

  onShowCategory(category: string): void{
    this.showCategory.emit(category);
  }
}
