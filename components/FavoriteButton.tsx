import axios from 'axios';
import { useCallback, useMemo } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';

type FavoriteButtonProps = {
  movieId: string;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: user, mutate } = useCurrentUser();
  const isFavorite = useMemo(() => {
    const list = user?.favoriteIds || [];
    return list.includes(movieId);
  }, [user, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete(`/api/favorite?movieId=${movieId}`);
    } else {
      response = await axios.post('/api/favorite', { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...user,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [user, movieId, isFavorite, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item mt-[2px] lg:mt-0 w-8 h-8 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon
        className="text-white transition hover:text-neutral-300 lg:mr-[1px]"
        size={22}
      />
    </div>
  );
};

export default FavoriteButton;
