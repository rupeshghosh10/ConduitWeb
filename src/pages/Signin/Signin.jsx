import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signin } from '../../services/userApi';
import { signinAction } from '../../store/user/userAction';
import { Link, useNavigate } from 'react-router-dom';
import FullScreenLoading from '../../components/FullScreenLoading/FullScreenLoading';

const schema = yup.object({
  email: yup.string().required('Email is required').email('Email must be a valid email').max(50),
  password: yup.string().required('Password is required').max(50)
});

const Signin = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit, setError } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const user = useSelector(x => x.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isSignedIn) {
      navigate('/');
    }
  }, [user]);

  const handleSignin = async data => {
    setIsLoading(true);
    try {
      const response = await signin(data);
      dispatch(signinAction(response));
      navigate('/');
    }
    catch (error) {
      switch (error.response.data.status) {
        case 401:
          setError('password', { message: 'Wrong password' });
          break;
        case 404:
          setError('email', { message: 'Email not found' });
          break;
        default:
          alert('Something went wrong!');
      }
    }
    setIsLoading(false);
  };

  return (
    !user.isSignedIn &&
    <div className='d-flex justify-content-center align-items-center w-100 full-height'>
      {isLoading && <FullScreenLoading />}
      <form className='needs-validation mb-5' onSubmit={handleSubmit(handleSignin)}>
        <h1 className='text-center'>Sign In</h1>
        <p className='mb-4 text-center'>Please enter your email and password</p>
        <div className='form-floating has-validation'>
          <input
            type='text'
            className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
            placeholder='Email Address'
            {...register('email')} />
          <label htmlFor='email'>Email Address</label>
          <p className='invalid-feedback m-0 ps-1'>{errors.email?.message}</p>
        </div>
        <div className='form-floating has-validation'>
          <input
            type='password'
            className={`form-control mt-1 form-control-lg ${errors.password ? 'is-invalid' : ''}`}
            placeholder='Password'
            {...register('password')} />
          <label htmlFor='password'>Password</label>
          <p className='invalid-feedback m-0 ps-1'>{errors.password?.message}</p>
        </div>
        <input type='submit' className='btn btn-lg btn-primary w-100 mt-1' value='Sign In' />
        <div className='mt-4 text-center'>
          <p>
            Don't have an account?{' '}
            <Link to='/signup' className='fw-bold text-decoration-none link-primary'>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signin;
