import { useQuery } from "@tanstack/react-query";
import type { IComment } from "../types/movie";

export const useGetCommentsTans = (comments?: string) => {
  const { data, isLoading, isError } = useQuery<IComment[]>({
    queryKey: ["comments", comments],
    queryFn: async () => {
      return fetch(`http://localhost:3001/movie/:movieId/comments}`).then(
        (res) => {
          return res.json();
        },
      );
    },
  });

  return { movies: data, loading: isLoading, isError };
};
