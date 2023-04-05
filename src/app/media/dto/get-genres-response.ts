export interface GetGenresResponse {
  genres: GenreDto[];
}
export interface GenreDto {
  id: number;
  name: string;
}
