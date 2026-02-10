import { useRef } from "react";
import { useAddMovie } from "../hooks/useAddMovieTans";

export const AddMovie = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addMovie } = useAddMovie();

  const movieAdd = () => {
    if (!inputRef.current) return;

    const value = inputRef.current.value;

    if (!value) {
      return window.alert("Dutuu oruulsan baina!");
    }

    addMovie(value);

    inputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <input ref={inputRef} placeholder="Add movie title..." />
        <input ref={inputRef} placeholder="Plot of the movie..." />
        <input ref={inputRef} placeholder="Add directors..." />
        <input ref={inputRef} placeholder="Released year..." />
        <input ref={inputRef} placeholder="Add genres..." />
        <input ref={inputRef} placeholder="Add runtime..." />
        <button onClick={movieAdd}>Add Movie</button>
      </div>
    </div>
  );
};
