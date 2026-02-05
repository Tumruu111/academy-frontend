export interface IMovie {
  title: string;
  _id: string;
  poster: string;
  year: string;
  plot: string;
  runtime: string;
  imdb: {
    rating: string;
  };
  genres: string[];
  directors: string[];
}
