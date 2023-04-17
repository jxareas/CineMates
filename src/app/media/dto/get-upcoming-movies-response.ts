import { DateFilterDto } from './date-filter-dto';
import { MovieDto } from './movie-dto';

export interface GetUpcomingMoviesResponse {
  dates: DateFilterDto;
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}
