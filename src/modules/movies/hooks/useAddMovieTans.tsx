import type { IMovie } from "../types/movie";

export const useAddMovie = () => {
  const addMovie = async (movie: IMovie) => {
    try {
      const res = await fetch("http://localhost:3001/movie/addMovie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      const data = await res.json();

      console.log("SUCCESS:", data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return { addMovie };
};
