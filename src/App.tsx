import "./App.css";
import { MovieMain } from "./modules/movies/components/MovieMain";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./modules/movies/components/MovieDetail";
import { DramaMovies } from "./modules/movies/components/DramaMovies";
import { AddMovie } from "./modules/movies/components/AddMovie";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MovieMain />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movie/Drama" element={<DramaMovies />} />
          <Route path="/movie/AddMovie" element={<AddMovie />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
