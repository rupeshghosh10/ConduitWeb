import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import UserContext from '../../components/UserContext/UserContext';
import styles from './Settings.module.css';

const Settings = () => {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit, setError } = useForm();

  useEffect(() => {
    if (!user.isSignedIn) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='d-flex justify-content-center align-items-center w-100 full-height'>
      <form className='mb-5'>
        <h2 className='text-center mb-3'>Your Settings</h2>
        <Input
          type='text'
          name='username'
          placeholder='Username'
          defaultValue={user.username}
          register={register}
          error={errors.username} />
        <div className='form-floating has-validation mb-2'>
          <textarea
            type='text'
            className={`form-control form-control-lg ${styles.textareaHeight}`}
            placeholder='Short bio about you'
            {...register('bio')}
            defaultValue={user.bio}></textarea>
          <label htmlFor='bio'>Short bio about you</label>
          <p className='invalid-feedback m-0 ps-1'></p>
        </div>
        <Input
          type='text'
          name='email'
          placeholder='Email'
          defaultValue={user.email}
          register={register}
          error={errors.username} />
        <div className='mt-4 text-center'>
          <input type='submit' className='btn btn-lg btn-primary w-100 mt-1' value='Update' />
          <Link to='/changepassword' className='btn btn-lg btn-danger w-100 mt-1'>Change Password</Link>
        </div>
      </form>
    </div>
  );
}

export default Settings;
