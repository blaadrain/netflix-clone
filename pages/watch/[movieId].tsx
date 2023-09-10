import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';
import { BsArrowBarLeft } from 'react-icons/bs';

const Player = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  // const onMouseMoveCaptureHandler = () => {

  // };

  return (
    <div
      className="h-screen w-screen bg-black"
      //onMouseMove={onMouseMoveCaptureHandler}
    >
      <nav className="fixed w-full p-6 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <BsArrowBarLeft
          onClick={() => router.push('/')}
          className="text-white hover:text-neutral-300 transition cursor-pointer"
          size={40}
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className="h-full w-full outline-none"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Player;
