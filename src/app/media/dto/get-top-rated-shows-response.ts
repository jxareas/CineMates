import {TvShowDto} from "./tv-show-dto";

export interface GetTopRatedShowsResponse {
	page: number;
	results: TvShowDto[];
	total_pages: number;
	total_results: number;
}
