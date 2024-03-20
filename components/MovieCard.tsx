import { useRouter } from "next/router";
import { BsPlayFill, BsChevronDown } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";

type MovieCardProps = {
  data: Record<string, any>;
};

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="col-span group relative h-[12vw] bg-zinc-900">
      <img
        className="duration h-[12vw] w-full cursor-pointer rounded-lg object-cover shadow-xl transition delay-100 group-hover:opacity-90 sm:group-hover:opacity-0"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-100 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
        <img
          className="duration h-[12vw] w-full cursor-pointer rounded-t-lg object-cover shadow-xl transition"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="absolute z-10 w-full rounded-b-lg bg-zinc-800 p-3 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {
                router.push(`/movie/${data?.id}`);
              }}
              className="mt-[1px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
            >
              <BsPlayFill size={28} className="ml-[2px] lg:ml-[3px]" />
            </div>
            <FavoriteButton movieId={data?.id} />
            <button
              onClick={() => openModal(data?.id)}
              className="group/item ml-auto mt-[2px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:mt-0 lg:h-10 lg:w-10"
            >
              <BsChevronDown
                size={22}
                className="text-white transition hover:text-neutral-300"
              />
            </button>
          </div>
          <p className="mt-2 bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text font-semibold text-transparent">
            New <span className="text-white">2023</span>
          </p>
          <div className="mt-2 flex flex-row items-center gap-2">
            <p className="text-[12px] text-white lg:text-sm">{data.genre}</p>
          </div>
          <div className="mt-2 flex flex-row items-center gap-2">
            <p className="text-[12px] text-white lg:text-sm">{data.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
