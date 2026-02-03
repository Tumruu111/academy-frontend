import { useEffect, useState } from "react";
import type { IMovie } from "../types/movie";

export const useDramaMovies = (genre: string) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3000/movie/movies?genre=${genre}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, [genre]);

  return { movies, loading };
};
