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
export interface IComment {
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: Date;
}
