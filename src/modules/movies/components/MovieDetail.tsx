import { useParams, Link } from "react-router-dom";
import { useGetMoviesTans } from "../hooks/useGetMovieTans";
import {
  LoaderCircle,
  Star,
  Calendar,
  Clock,
  ArrowLeft,
  Clapperboard,
  Film,
  MessageCircleMore,
} from "lucide-react";

export const MovieDetail = () => {
  const { id } = useParams();
  const { movies, loading } = useGetMoviesTans();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin text-white w-12 h-12" />
      </div>
    );
  }

  const movie = movies?.find((m) => m._id === id);
  if (!movie) {
    return (
      <div className="text-center text-red-400 mt-20 text-xl font-semibold">
        Movie not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors font-medium mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to movies
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="relative group">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {movie.title}
                  </h1>
                  <div className="flex flex-wrap gap-6 text-slate-300">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {movie.year}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {movie.runtime}
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Plot
                  </h2>
                  <p className="text-slate-300 leading-relaxed">{movie.plot}</p>
                </div>

                <div className="bg-slate-800/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50">
                  <div className="flex items-center gap-4 text-yellow-400 mb-4">
                    <Star className="w-5 h-5" />
                    <span className="text-2xl font-bold">
                      ⭐ {movie.imdb.rating}/10
                    </span>
                  </div>
                </div>
                <div className="bg-slate-800/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50">
                  <div className="flex items-center gap-4 text-yellow-400 mb-4">
                    <Film className="w-5 h-5" />
                    <span className="text-2xl font-bold">
                      Genres: {movie.genres.join(", ")}
                    </span>
                  </div>
                </div>
                <div className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
                  <div className="flex items-center gap-6 text-yellow-400 mb-4">
                    <Clapperboard className="w-5 h-5" />
                    <span className="text-2xl font-bold">
                      Directors: {movie.directors.join(", ")}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Comments</h3>
                <div className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-8 backdrop-blur-sm border border-slate-600/">
                    <MessageCircleMore className="w-8 h-8" color="white" />
                    <input
                      className=" w-full rounded-2xl p-2 backdrop-blur-sm text-white"
                      placeholder="Share your thoughts about this movie"
                    ></input>
                    <button className="text-slate-950 hover:text-white transition-colors font-bold bg-amber-300 rounded-2xl">
                      Sumbit comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
