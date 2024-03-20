import { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import axios from "axios";
import useFavorites from "@/hooks/useFavorites";
import useCurrentUser from "@/hooks/useCurrentUser";

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
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...user,
      favoriteIds: updatedFavoriteIds,
    });

    mutateFavorites();
  }, [user, isFavorite, movieId, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="group/item mt-[2px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:mt-0 lg:h-10 lg:w-10"
    >
      <Icon
        className="text-white transition hover:text-neutral-300 lg:mr-[1px]"
        size={22}
      />
    </div>
  );
};

export default FavoriteButton;
