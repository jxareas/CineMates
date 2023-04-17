import {TrendingMediaDto} from "./trending-media-dto";

export interface GetTrendingLastWeekResponse {
  page: number;
  results: TrendingMediaDto[];
  total_pages: number;
  total_results: number;
}
