import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const CommentListItem = ({ comment }) => {
  return (
    <li key={comment.commentId} className='list-unstyled mb-2'>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text'>{comment.body}</p>
        </div>
        <div className='card-footer bg-secondary bg-opacity-10 py-1'>
          <Link to='/' className='p-0 m-0 small text-success text-decoration-none'>
            {comment.author.username}
          </Link>
          <span className='small text-secondary ms-3'>
            {DateTime.fromISO(comment.createdAt).toFormat('LLLL yy, dd')}
          </span>
        </div>
      </div>
    </li>
  );
}

export default CommentListItem;
