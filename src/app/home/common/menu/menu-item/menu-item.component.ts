import {Component, Input} from '@angular/core';

@Component({
  selector: 'jx-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input()
  name: string;
}
