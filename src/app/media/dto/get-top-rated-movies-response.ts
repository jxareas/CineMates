import {MovieDto} from "./movie-dto";

export interface GetTopRatedMoviesResponse {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}
