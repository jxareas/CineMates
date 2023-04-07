import { Component, Input } from '@angular/core';

@Component({
  selector: 'jx-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
})
export class TextButtonComponent {
  @Input()
  buttonText: string;
}
