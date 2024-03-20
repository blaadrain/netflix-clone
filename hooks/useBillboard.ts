import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const movie = {
  id: '1',
  title: 'Big Buck Bunny',
  description:
    'Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.',
  videoUrl:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  thumbnailUrl:
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png',
  genre: 'Comedy',
  duration: '10 minutes',
};

const useBillboard = () => {
  // const { data, error, isLoading } = useSWR('/api/random', fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  return {
    movie,
  };
};

export default useBillboard;
