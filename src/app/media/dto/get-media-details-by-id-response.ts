import {GenreDto} from "./genre-dto";

export interface GetMediaDetailsByIdResponse {
  title : string;
  name : string;
  vote_average : number;
  runtime : number;
  release_date : string;
  overview : string;
  genres : GenreDto[];
}
