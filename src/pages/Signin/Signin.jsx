import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loading from '../../components/Loading/Loading';
import { signin } from '../../services/userApi';
import { signinAction } from '../../store/user/userAction';
import styles from './Signin.module.css';

const schema = yup.object({
  email: yup.string().required('Email is required').email('Email must be a valid email'),
  password: yup.string().required('Password is required')
});

const Signin = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  const dispatch = useDispatch();

  const handleSignin = async data => {
    setIsLoading(true);
    try {
      const response = await signin(data);
      dispatch(signinAction(response));
    }
    catch (error) {
      console.log(error.response);
      alert(error);
    }
    setIsLoading(false);
  };

  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      {isLoading &&
        <div className={`d-flex align-items-center justify-content-center w-100 h-100 position-absolute ${styles.loading}`}>
          <Loading width={100} />
        </div>}
      <div className='px-sm-5 px-4 py-4 border border-secondary rounded'>
        <form onSubmit={handleSubmit(handleSignin)}>
          <h1 className='text-center'>Sign In</h1>
          <p className='mb-4 text-center'>Please enter your email and password</p>
          <div className='form-floating has-validation'>
            <input
              type='text'
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder='Email Address'
              {...register('email')} />
            <label htmlFor='email'>Email Address</label>
            <p className='invalid-feedback m-0 ps-1'>{errors.email?.message}</p>
          </div>
          <div className='form-floating has-validation'>
            <input
              type='password'
              className={`form-control mt-1 ${errors.password ? 'is-invalid' : ''}`}
              placeholder='Password'
              {...register('password')} />
            <label htmlFor='password'>Password</label>
            <p className='invalid-feedback m-0 ps-1'>{errors.password?.message}</p>
          </div>
          <input type='submit' className='btn btn-lg btn-primary w-100 mt-1' value='Sign In' />
        </form>
        <div className='mt-4 text-center'>
          <p>Don't have an account? <a href='/' className='fw-bold text-decoration-none link-primary'>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
