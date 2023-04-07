import {Component, Input} from '@angular/core';

@Component({
  selector: 'jx-contained-button',
  templateUrl: './contained-button.component.html',
  styleUrls: ['./contained-button.component.scss']
})
export class ContainedButtonComponent {
  @Input()
  buttonText: string;
}
