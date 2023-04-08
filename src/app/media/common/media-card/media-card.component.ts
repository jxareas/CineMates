import { Component, Input } from '@angular/core';
import { MediaCardViewModel } from './media-card-viewmodel';
import { MediaCardDetailsViewModel } from './media-card-details-viewmodel';
import { debounceTime, Subscription } from 'rxjs';
import { MediaService } from '../../api/media.service';
import { MediaType } from '../../models/media-type';

@Component({
  selector: 'jx-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent {
  @Input()
  movie: MediaCardViewModel;

  @Input()
  details: MediaCardDetailsViewModel;

  subscription?: Subscription;

  constructor(private mediaService: MediaService) {}

  enter() {
    this.leave();

    if (!this.details) {
      this.subscription = this.mediaService
        .fetchDetailsById(this.movie.id, this.getMediaType())
        .pipe(debounceTime(1_000))
        .subscribe(res => {
          this.details = res;
        });
    }
  }

  getMediaType(): MediaType {
    return this.movie.media_type == 'movie' ? MediaType.Movie : MediaType.TV;
  }

  leave() {
    this.subscription?.unsubscribe();
  }
}
