import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import TagList from '../TagList/TagList';

const ArticleListItem = ({ article }) => {
  return (
    <article className='p-3 border-bottom'>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <div className='d-flex flex-column align-items-start justify-content-center'>
              <Link to='/' className='link-success text-decoration-none fs-6'>{article.author.username}</Link>
              <p className='small text-secondary mb-0'>{DateTime.fromISO(article.createdAt).toFormat('LLL yy, dd')}</p>
            </div>
          </div>
          <div className='col-2'>
            <button className='btn btn-outline-success btn-sm float-end'>Like</button>
          </div>
        </div>
        <div className='d-flex flex-column align-items-start justify-content-center mt-2'>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
        <div className='row'>
          <div className='col-8'>
            <Link to='/' className='link-secondary text-decoration-none'>Read More...</Link>
          </div>
          <div className='col-4'>
            <TagList tags={article.tags} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleListItem;
