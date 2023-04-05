export interface GetTrendingLastWeekResponse {
  page: number;
  results: TrendingMediaDto[];
  total_pages: number;
  total_results: number;
}
export interface TrendingMediaDto {
  id: number;
  adult: boolean;
  backdrop_path: string;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}
