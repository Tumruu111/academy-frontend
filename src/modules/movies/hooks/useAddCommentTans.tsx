import { useMutation } from "@tanstack/react-query";

export const useAddComment = () => {
  const { mutate } = useMutation({
    mutationFn: (comment: string) => {
      return fetch(`http://localhost:3001/movie/:movieId/addComments`, {
        method: "POST",
        body: JSON.stringify({ comment }),
      });
    },
    onSuccess: () => {
      window.alert("Comment added successfully");
    },
  });

  return { addMovie: mutate };
};
