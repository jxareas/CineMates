import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../media/api/media.service";
import {GenreDto} from "../../../media/dto/get-genres-response";

@Component({
  selector: 'jx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  genres : GenreDto[];

  constructor(private mediaService : MediaService) {

  }

  ngOnInit(): void {
    this.mediaService.fetchGenres().subscribe({
      next: genres => (this.genres = genres),
    });
  }

}
