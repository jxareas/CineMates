import { Component, OnInit } from '@angular/core';
import { TrendingMediaDto } from '../../media/dto/get-trending-last-week-response';
import { MediaService } from '../../media/api/media.service';
import { delay } from 'rxjs';
import { TopRatedMoviesDto } from '../../media/dto/get-top-rated-movies-response';

@Component({
  selector: 'jx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
}
