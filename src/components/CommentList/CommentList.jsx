import { useEffect, useState } from 'react';
import { getComments } from '../../services/articleApi';
import Loading from '../Loading/Loading';
import CommentListItem from '../CommentListItem/CommentListItem';

const CommentList = ({ slug }) => {

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getComments(slug);
      setComments(response);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className='text-center mt-5'>
        <Loading width={100} />
      </div>
    );
  }

  return (
    <ul>
      {comments.length !== 0 && comments.map(comment => <CommentListItem key={comment.commentId} comment={comment} />)}
    </ul>
  );
}

export default CommentList;
