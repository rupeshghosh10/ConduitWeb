import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getArticle } from '../../services/articleApi';
import FullScreenLoading from '../../components/FullScreenLoading/FullScreenLoading';
import ArticleMeta from '../../components/ArticleMeta/ArticleMeta';
import TagList from '../../components/TagList/TagList';
import CommentList from '../../components/CommentList/CommentList';
import AddComment from '../../components/AddComment/AddComment';
import UserContext from '../../components/UserContext/UserContext';

const Article = () => {

  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await getArticle(location.pathname.split('/')[2]);
        setArticle(response);
        setIsLoading(false);
      }
      catch (error) {
        alert('Can not load comments');
      }
    })();
  }, [location.pathname]);

  if (isLoading) {
    return <FullScreenLoading width={150} />
  }

  return (
    <>
      <article>
        <div className='py-3 container border-bottom'>
          <h1>{article.title}</h1>
          <div className='d-flex align-items-center justify-content-start'>
            <ArticleMeta username={article.author.username} createdAt={article.createdAt} />
            <button className='btn btn-sm btn-outline-success ms-5'>Follow</button>
            <button className='btn btn-sm btn-outline-success ms-2'>Favourite</button>
          </div>
        </div>
        <div className='container mt-4 border-bottom pb-3'>
          <p className='fs-5 mb-3'>{article.body}</p>
          <TagList tags={article.tags} justifyContent='start' />
        </div>
      </article>
      <div className='container py-4 w-50'>
        {user.isSignedIn && <AddComment slug={article.slug} comments={comments} setComments={setComments} />}
        <CommentList slug={article.slug} comments={comments} setComments={setComments} />
      </div>
    </>
  );
}

export default Article;
