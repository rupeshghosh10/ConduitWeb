import { useState } from 'react';
import { favoriteArticle, unfavoriteArticle } from '../../services/articleApi';

const FavoriteButton = ({ slug, favorited, favoritesCount }) => {

  const [isFavorite, setIsFavorite] = useState(favorited);
  const [count, setCount] = useState(favoritesCount);

  const handleFavorite = async slug => {
    try {
      setIsFavorite(true);
      setCount(count + 1);
      await favoriteArticle(encodeURIComponent(slug))
    }
    catch {
      alert('Something went wrong!');
    }
  }

  const handleUnfavorite = async slug => {
    try {
      setIsFavorite(false);
      setCount(count - 1);
      await unfavoriteArticle(encodeURIComponent(slug));
    }
    catch {
      alert('Something went wrong!');
    }
  }

  return (
    <>
      {!isFavorite &&
        <button className='btn btn-outline-success btn-sm float-end d-flex' onClick={() => handleFavorite(slug)}>
          <i className="bi bi-heart me-1"></i>Favourite {count}
        </button>}
      {isFavorite &&
        <button className='btn btn-success btn-sm float-end d-flex' onClick={() => handleUnfavorite(slug)}>
          <i className="bi bi-heart me-1"></i>Favourite {count}
        </button>}
    </>
  );
}

export default FavoriteButton;
