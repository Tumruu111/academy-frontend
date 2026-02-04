import {useAddMovie} from "../hooks/useAddMovieTans"

const { mutate: addMovie, isError } = useAddMovie();

addMovie({
  title: "Inception",
  year: "2010",
  plot: "",
  poster: 
});