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
        .subscribe(getMediaDetailsResponse => {
          this.details = getMediaDetailsResponse;
        });
    }
  }

  getMediaType(): MediaType {
    // TODO : Refactor this code, it is not intuitive
    // Explanation: While using the TMDb API, `title` is a property for a Movie while `name` is that of a TV Show
    return this.movie.title ? MediaType.Movie : MediaType.TV;
  }

  leave() {
    this.subscription?.unsubscribe();
  }
}
