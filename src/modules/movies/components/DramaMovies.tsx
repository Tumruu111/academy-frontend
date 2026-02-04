import { useGetMoviesTans } from "../hooks/useGetMovieTans";

export const DramaMovies = () => {
  const { movies, loading } = useGetMoviesTans("Drama");

  if (loading) {
    return <h1>Unshij bn</h1>;
  }
  return (
    <>
      {movies?.map((movie) => {
        return <p>{movie.title}</p>;
      })}
    </>
  );
};
