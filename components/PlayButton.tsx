import { BsPlayFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

type PlayButtonProps = {
  movieId: string;
};

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
    >
      <BsPlayFill
        className="mr-1"
        size={20}
      />
      Watch
    </button>
  );
};

export default PlayButton;
