import { Component, Input } from '@angular/core';

@Component({
  selector: 'jx-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() height: any = '1em';
  @Input() radius: any = '0';
}
