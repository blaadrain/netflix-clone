/* eslint-disable @next/next/no-img-element */
import { BsPlayFill, BsChevronDown } from 'react-icons/bs';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/router';
import useInfoModal from '@/hooks/useInfoModal';

type MovieCardProps = {
  data: Record<string, any>;
};

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        className="cursor-pointer object-cover transition duration shadow-xl rounded-lg group-hover:opacity-90 sm:group-hover:opacity-0 delay-100 w-full h-[12vw]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-100 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:opacity-100">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-lg w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="z-10 bg-zinc-800 p-3 lg:p-4 absolute w-full transition shadow-md rounded-b-lg">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {
                router.push(`/watch/${data?.id}`);
              }}
              className="cursor-pointer mt-[1px] w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsPlayFill
                size={28}
                className="ml-[2px] lg:ml-[3px]"
              />
            </div>
            <FavoriteButton movieId={data?.id} />
            <button
              onClick={() => openModal(data?.id)}
              className="ml-auto group/item mt-[2px] lg:mt-0 w-8 h-8 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <BsChevronDown
                size={22}
                className="text-white transition hover:text-neutral-300"
              />
            </button>
          </div>
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600 font-semibold mt-2">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[12px] lg:text-sm">{data.genre}</p>
          </div>
          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[12px] lg:text-sm">{data.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
