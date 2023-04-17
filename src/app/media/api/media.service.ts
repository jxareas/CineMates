import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetGenresResponse } from '../dto/get-genres-response';
import { GetMoviesByQueryResponse } from '../dto/get-movies-by-query-response';
import { GetTrendingLastWeekResponse } from '../dto/get-trending-last-week-response';
import { GetTopRatedMoviesResponse } from '../dto/get-top-rated-movies-response';
import { MediaType } from '../models/media-type';
import {GetTopRatedShowsResponse} from "../dto/get-top-rated-shows-response";
import {GenreDto} from "../dto/genre-dto";

@Injectable()
export class MediaService {
  constructor(private client: HttpClient) {}

  fetchGenres(): Observable<GenreDto[]> {
    return this.client
      .get<GetGenresResponse>(`/genre/movie/list`)
      .pipe(map(response => response.genres));
  }

  searchByQuery(
    query: string,
    page: number = 1,
  ): Observable<GetMoviesByQueryResponse> {
    const params = new HttpParams().set('query', query).set('page', page);

    return this.client.get<GetMoviesByQueryResponse>(`/search/movie`, {
      params,
    });
  }

  fetchTopRatedMovies(page: number = 1): Observable<GetTopRatedMoviesResponse> {
    return this.client.get<GetTopRatedMoviesResponse>(
      `/movie/top_rated?page=${page}`,
    );
  }

  fetchTopRatedShows(page : number = 1) : Observable<GetTopRatedShowsResponse> {
    return this.client.get<GetTopRatedShowsResponse>(`/tv/top_rated?page=${page}`)
  }

  fetchTrendingMedia(): Observable<GetTrendingLastWeekResponse> {
    return this.client.get<GetTrendingLastWeekResponse>(`/trending/all/week`);
  }

  fetchDetailsById(
    id: number,
    mediaType: MediaType = MediaType.Movie,
  ): Observable<any> {
    return this.client.get(`/${mediaType}/${id}`);
  }
}
