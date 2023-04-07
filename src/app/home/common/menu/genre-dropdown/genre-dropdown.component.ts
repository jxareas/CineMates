import {Component, OnInit} from '@angular/core';
import {GenreDto} from "../../../../media/dto/get-genres-response";
import {MediaService} from "../../../../media/api/media.service";

@Component({
  selector: 'jx-genre-dropdown',
  templateUrl: './genre-dropdown.component.html',
  styleUrls: ['./genre-dropdown.component.scss']
})
export class GenreDropdownComponent implements OnInit {
  genres : GenreDto[];

  constructor(private mediaService : MediaService) {

  }

  ngOnInit(): void {
    this.mediaService.fetchGenres().subscribe({
      next: genres => (this.genres = genres),
    });
  }
}
