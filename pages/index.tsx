import { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';

import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModal from '@/hooks/useInfoModal';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

const HomePage: NextPage = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal
        hidden={!isOpen}
        close={closeModal}
      />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList
          title="Trending Now"
          data={movies}
        />
        <MovieList
          title="My List"
          data={favorites}
        />
      </div>
    </>
  );
};

export default HomePage;
