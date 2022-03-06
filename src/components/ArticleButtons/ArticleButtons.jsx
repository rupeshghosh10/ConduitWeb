import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../components/UserContext/UserContext';
import { deleteArticle } from '../../services/articleApi';

const ArticleButtons = ({ article, setIsLoading }) => {

  const { user } = useContext(UserContext);
  const navigate = useNavigate('/');

  const handleArticleDelete = async slug => {
    setIsLoading(true);
    try {
      await deleteArticle(encodeURIComponent(slug));
      navigate('/');
      return;
    }
    catch {
      alert('Can not Delete Article');
    }
    setIsLoading(false);
  }

  return (
    <div className='ms-5'>
      {user.username !== article.author.username &&
        <button className='btn btn-sm btn-outline-success ms-2'>
          <i className="bi bi-plus-lg"></i> Follow
        </button>}
      <button className='btn btn-sm btn-outline-success ms-2'>
        <i className="bi bi-heart"></i> Favourite
      </button>
      {user.username === article.author.username &&
        <button
          className='btn btn-sm btn-outline-danger ms-2'
          onClick={() => handleArticleDelete(article.slug)}
        >
          <i className="bi bi-trash"></i> Delete
        </button>}
    </div>
  );
}

export default ArticleButtons;
