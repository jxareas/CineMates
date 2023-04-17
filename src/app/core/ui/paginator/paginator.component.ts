import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;

  @Input() finalPage: number = 1;

  @Output() changePage: EventEmitter<number> = new EventEmitter();

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.finalPage) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPage(newPage: number): void {
    this.currentPage = newPage;
    this.changePage.emit(newPage);
  }
}
