import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {

  @Input() initialPage: number = 1;

  @Input() finalPage: number = 1;

  @Output() changePage: EventEmitter<any> = new EventEmitter();

  previousPage(): void {
    //TODO : Handle navigation to previous page
  }

  nextPage(): void {
    //TODO : Handle navigation to next page
  }

  goToPage(page: number): void {
    //TODO : Handle custom page navigation
  }
}
