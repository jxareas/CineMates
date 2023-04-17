import {MovieDto} from "./movie-dto";
import {DateFilterDto} from "./date-filter-dto";

export interface GetNowPlayingMoviesResponse {
	dates: DateFilterDto;
	page: number;
	results: MovieDto[];
	total_pages: number;
	total_results: number;
}
