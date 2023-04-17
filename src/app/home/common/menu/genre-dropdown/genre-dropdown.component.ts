import {Component, OnInit} from '@angular/core';
import {MediaService} from "../../../../media/api/media.service";
import {GenreDto} from "../../../../media/dto/genre-dto";

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
