import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './AddComment.module.css';
import addCommentSchema from './addCommentSchema';
import { postComment } from '../../services/articleApi';
import { useEffect } from 'react';

const AddComment = ({ slug, comments, setComments }) => {

  const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, reset } = useForm({
    resolver: yupResolver(addCommentSchema)
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ body: '' });
    }
  }, [isSubmitSuccessful, reset])

  const handlePostComment = async data => {
    try {
      const response = await postComment(encodeURIComponent(slug), data);
      setComments([response, ...comments]);
    }
    catch {
      alert('Something went wrong! Can not add comment');
    }
  }

  return (
    <form onSubmit={handleSubmit(handlePostComment)}>
      <div className='card mb-3'>
        <textarea
          type='text'
          className={`form-control ${styles.addComment} ${errors?.body ? 'is-invalid' : ''}`}
          placeholder='Write Comment'
          {...register('body')}
        >
        </textarea>
        <div className='card-footer bg-secondary bg-opacity-10 py-1'>
          <button className='btn btn-sm btn-success float-end'>Post Comment</button>
        </div>
      </div>
    </form>
  );
}

export default AddComment;
