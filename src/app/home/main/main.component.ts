import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../media/api/media.service';
import { delay } from 'rxjs';
import {TrendingMediaDto} from "../../media/dto/trending-media-dto";
import {MovieDto} from "../../media/dto/movie-dto";

@Component({
  selector: 'jx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
}
