import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MediaSectionViewModel } from './media-section-viewmodel';

@Component({
  selector: 'jx-media-section',
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.scss'],
})
export class MediaSectionComponent {
  @Input()
  header: string = 'Media Section';

  @Input()
  media: MediaSectionViewModel[];
  @Input()
  isLoadingMedia: boolean;
}
