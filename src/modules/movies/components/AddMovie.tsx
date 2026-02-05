import { useRef } from "react";
import { useAddMovie } from "../hooks/useAddMovieTans";

export const AddMovie = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addMovie } = useAddMovie();

  const movieAdd = () => {
    if (!inputRef.current) return;

    const value = inputRef.current.value;

    if (!value) {
      return window.alert("Title oruulna uu");
    }

    addMovie(value);

    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Movie title" />
      <button onClick={movieAdd}>Add Movie</button>
    </div>
  );
};
