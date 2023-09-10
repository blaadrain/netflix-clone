import useBillboard from '@/hooks/useBillboard';
import PlayButton from './PlayButton';

const Billboard: React.FC = () => {
  const { data, isLoading } = useBillboard();

  return (
    <div className="relative h-[56.25vw] ">
      <video
        className="bg-black w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[10px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        {isLoading ? (
          ''
        ) : (
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <PlayButton movieId={data?.id} />
            <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
              More info
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billboard;
