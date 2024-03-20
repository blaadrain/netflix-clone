import { useCallback } from "react";
import PlayButton from "./PlayButton";
import useBillboard from "@/hooks/useBillboard";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard: React.FC = () => {
  const { data: movie } = useBillboard();
  const { openModal } = useInfoModal();

  const handleModal = useCallback(() => {
    openModal(movie?.id);
  }, [openModal, movie?.id]);

  return (
    <div className="relative h-[56.25vw] ">
      <video
        className="h-[56.25vw] w-full bg-black object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        src={movie?.videoUrl}
      />
      <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
        <p className="h-full w-[50%] text-xl font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl">
          {movie?.title}
        </p>
        <p className="mt-3 w-[90%] text-[10px] text-white drop-shadow-xl md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]">
          {movie?.description}
        </p>
        {true ? (
          ""
        ) : (
          <div className="mt-3 flex flex-row items-center gap-3 md:mt-4">
            <PlayButton movieId={movie?.id} />
            <button
              className="flex w-auto flex-row items-center rounded-md bg-white bg-opacity-30 px-2 py-1 text-sm font-semibold text-white transition hover:bg-opacity-20 md:px-4 md:py-2 lg:text-lg"
              onClick={handleModal}
            >
              More info
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billboard;
