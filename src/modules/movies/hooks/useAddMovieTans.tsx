import { useMutation } from "@tanstack/react-query";
import type { IMovie } from "../types/movie";

export const useAddMovie = () => {
  const mutation = useMutation<IMovie, Error, IMovie>({
    mutationFn: async (newMovie) => {
      const res = await fetch("http://localhost:3000/movie/addMovies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });

      if (!res.ok) {
        throw new Error("Failed to add movie");
      }

      return res.json();
    },
  });
  return mutation;
};
