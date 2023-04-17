import {MovieDto} from "./movie-dto";

export interface GetMoviesByQueryResponse {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}
