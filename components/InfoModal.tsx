import { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';

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
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isHidden ? 'scale-0' : 'scale-100'
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              className="w-full h-full brightness-[60%] object-cover"
              src={data?.videoUrl}
              autoPlay
              muted
              loop
            ></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-4 right-4 h-10 w-10 rounded-full bg-black bg-opacity-0 transition hover:bg-opacity-50 flex justify-center items-center"
            >
              <AiOutlineClose
                className="text-white"
                size={20}
              />
            </div>
            <div className="absolute bottom-10 left-10">
              <p className="text-white text-3xl md:text-4xl lg:text-5xl h-full font-bold mb-4">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-12 py-8">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600 text-lg">
              New
            </span>
            <span className="text-neutral-200 text-lg">{data?.genre}</span>
            <span className="text-neutral-200 text-lg">{data?.duration}</span>
            <span className="text-white text-lg">{data?.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
