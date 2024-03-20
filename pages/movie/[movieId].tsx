import { useRouter } from "next/router";
import { BsArrowBarLeft } from "react-icons/bs";
import useMovie from "@/hooks/useMovie";

const Player = () => {
  const router = useRouter();

  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  // const onMouseMoveCaptureHandler = () => {
  // TODO: hide movie title
  // };

  return (
    <div
      className="h-screen w-screen bg-black"
      //onMouseMove={onMouseMoveCaptureHandler}
    >
      <nav className="fixed z-10 flex w-full flex-row items-center gap-8 bg-black bg-opacity-70 p-6">
        <BsArrowBarLeft
          onClick={() => router.push("/")}
          className="cursor-pointer text-white transition hover:text-neutral-300"
          size={40}
        />
        <p className="text-xl font-bold text-white md:text-3xl">
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
