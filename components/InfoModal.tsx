import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

type InfoModalProps = {
  hidden: boolean;
  close: any;
};

const InfoModal: React.FC<InfoModalProps> = ({ hidden, close }) => {
  const [isHidden, setIsHidden] = useState(!!hidden);
  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsHidden(!!hidden);
  }, [hidden]);

  const handleClose = useCallback(() => {
    setIsHidden(false);
    setTimeout(() => {
      close();
    }, 300);
  }, [close]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-80 transition duration-300">
      <div className="relative mx-auto w-auto max-w-3xl overflow-hidden rounded-md">
        <div
          className={`${
            isHidden ? "scale-0" : "scale-100"
          } relative flex-auto transform bg-zinc-900 drop-shadow-md duration-300`}
        >
          <div className="relative h-96">
            <video
              className="h-full w-full object-cover brightness-[60%]"
              src={data?.videoUrl}
              autoPlay
              muted
              loop
            ></video>
            <div
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-0 transition hover:bg-opacity-50"
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-10 left-10">
              <p className="mb-4 h-full text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {data?.title}
              </p>
              <div className="flex flex-row items-center gap-4">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-12 py-8">
            <span className="bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-lg font-bold text-transparent">
              New
            </span>
            <span className="text-lg text-neutral-200">{data?.genre}</span>
            <span className="text-lg text-neutral-200">{data?.duration}</span>
            <span className="text-lg text-white">{data?.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
