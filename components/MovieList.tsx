import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

type MovieListProps = {
  data: Record<string, any>[];
  title: string;
};

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null;

  return (
    <div className="mt-12 space-y-8 px-4 md:px-12">
      <div>
        <p className="mb-4 text-xl font-semibold text-white md:text-2xl lg:text-3xl">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-4">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
