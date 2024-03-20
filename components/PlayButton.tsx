import { useRouter } from "next/router";
import { BsPlayFill } from "react-icons/bs";

type PlayButtonProps = {
  movieId: string;
};

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/movie/${movieId}`)}
      className="flex w-auto flex-row items-center rounded-md bg-white px-2 py-1 text-sm font-semibold transition hover:bg-neutral-300 md:px-4 md:py-2 lg:text-lg"
    >
      <BsPlayFill className="mr-1" size={20} />
      Watch
    </button>
  );
};

export default PlayButton;
