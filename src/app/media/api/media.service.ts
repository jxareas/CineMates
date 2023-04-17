import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetGenresResponse } from '../dto/get-genres-response';
import { GetMoviesByQueryResponse } from '../dto/get-movies-by-query-response';
import { GetTrendingLastWeekResponse } from '../dto/get-trending-last-week-response';
import { GetTopRatedMoviesResponse } from '../dto/get-top-rated-movies-response';
import { MediaType } from '../models/media-type';
import { GetTopRatedShowsResponse } from '../dto/get-top-rated-shows-response';
import { GenreDto } from '../dto/genre-dto';
import { GetUpcomingMoviesResponse } from '../dto/get-upcoming-movies-response';
import { GetNowPlayingMoviesResponse } from '../dto/get-now-playing-movies-response';
import { GetMediaDetailsByIdResponse } from '../dto/get-media-details-by-id-response';
import {GenreEndpoints} from "./constants/genre-endpoints";
import {MovieEndpoints} from "./constants/movie-endpoints";
import {TrendingEndpoints} from "./constants/trending-endpoints";
import {TvShowsEndpoints} from "./constants/tv-shows-endpoints";

@Injectable()
export class MediaService {
  constructor(private client: HttpClient) {}

  fetchGenres(): Observable<GenreDto[]> {
    return this.client
      .get<GetGenresResponse>(GenreEndpoints.GET_GENRES)
      .pipe(map(response => response.genres));
  }

  //TODO: trending,popular,  playing, rated, upcoming
  popular(page: number = 1): Observable<GetTopRatedMoviesResponse> {
    return this.client.get<GetTopRatedMoviesResponse>(
      `${MovieEndpoints.GET_POPULAR}?page=${page}`,
    );
  }

  trending(page: number = 1): Observable<GetTrendingLastWeekResponse> {
    return this.client.get<GetTrendingLastWeekResponse>(
      `${TrendingEndpoints.GET_LAST_WEEK}?page=${page}`,
    );
  }

  rated(page: number = 1): Observable<GetTopRatedMoviesResponse> {
    return this.client.get<GetTopRatedMoviesResponse>(
      `${MovieEndpoints.GET_TOP_RATED_MOVIES}?page=${page}`,
    );
  }

  upcoming(page: number = 1): Observable<GetUpcomingMoviesResponse> {
    return this.client.get<GetUpcomingMoviesResponse>(
      `${MovieEndpoints.GET_UPCOMING}?page=${page}`,
    );
  }

  playing(page: number = 1): Observable<GetNowPlayingMoviesResponse> {
    return this.client.get<GetNowPlayingMoviesResponse>(
      `${MovieEndpoints.GET_NOW_PLAYING}?page=${page}`,
    );
  }

  searchByQuery(
    query: string,
    page: number = 1,
  ): Observable<GetMoviesByQueryResponse> {
    const params = new HttpParams().set('query', query).set('page', page);

    return this.client.get<GetMoviesByQueryResponse>(
      MovieEndpoints.SEARCH_BY_QUERY,
      {
        params,
      },
    );
  }

  fetchTopRatedShows(page: number = 1): Observable<GetTopRatedShowsResponse> {
    return this.client.get<GetTopRatedShowsResponse>(
      `${TvShowsEndpoints.GET_TOP_RATED}?page=${page}`,
    );
  }

  fetchDetailsById(
    id: number,
    mediaType: MediaType = MediaType.Movie,
  ): Observable<GetMediaDetailsByIdResponse> {
    return this.client.get<GetMediaDetailsByIdResponse>(`${mediaType}/${id}`);
  }
}
