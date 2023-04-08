export interface MediaCardDetailsViewModel {
  title : string;
  name : string;
  vote_average : number;
  runtime : number;
  release_date : string;
  overview : string;
  genres : MediaCardDetailsGenre[];
}

interface MediaCardDetailsGenre {
  id : number;
  name : string;
}

