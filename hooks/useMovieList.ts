import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMovieList = () => {
  let { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data };
};

export default useMovieList;
