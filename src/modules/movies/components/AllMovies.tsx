import { useGetMoviesTans } from "../hooks/useGetMovieTans";
import { LoaderCircle } from "lucide-react";
import { MovieCard } from "./MovieCard";
export const AllMovies = () => {
  const { movies, loading } = useGetMoviesTans();

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <LoaderCircle className="animate-spin flex justify-center"></LoaderCircle>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-5 max-w-200 mx-auto">
      {movies?.map((movie) => {
        return <MovieCard movie={movie}></MovieCard>;
      })}
    </div>
  );
};
