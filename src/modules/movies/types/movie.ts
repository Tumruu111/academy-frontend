export interface IMovie {
  title: string;
  _id?: string;
  poster: string;
  year: string;
  plot: string;
  runtime: string;
  imdb: {
    rating: number;
  };
  genres: string[];
  directors: string[];
  fullplot: string;
}
export interface IComment {
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: Date;
}
