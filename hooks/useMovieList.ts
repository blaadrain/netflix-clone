import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovieList = () => {
  let { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data };
};

export default useMovieList;
