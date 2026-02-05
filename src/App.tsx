import "./App.css";
import { MovieMain } from "./modules/movies/components/MovieMain";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./modules/movies/components/MovieDetail";
import { DramaMovies } from "./modules/movies/components/DramaMovies";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MovieMain />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movie/Drama" element={<DramaMovies />} />
        </Routes>
      </Router>
      {/* <MovieMain /> */}
    </QueryClientProvider>
  );
}

export default App;
