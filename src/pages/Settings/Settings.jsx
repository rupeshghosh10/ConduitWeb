import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import UserContext from '../../components/UserContext/UserContext';
import TextArea from '../../components/TextArea/TextArea';

const Settings = () => {

  const { user } = useContext(UserContext);
  const { register, formState: { errors }, handleSubmit, setError } = useForm();

  const handleUpdate = data => {
    console.log(data);
  }

  return (
    <div className='d-flex justify-content-center align-items-center w-100 full-height'>
      <form className='mb-5' onSubmit={handleSubmit(handleUpdate)}>
        <h2 className='text-center mb-3'>Your Settings</h2>
        <Input
          type='text'
          name='username'
          placeholder='Username'
          defaultValue={user.username}
          register={register}
          error={errors.username} />
        <TextArea
          type='text'
          name='bio'
          placeholder='Short bio about you'
          defaultValue={user.bio}
          register={register}
          error={errors.username} />
        <Input
          type='text'
          name='email'
          placeholder='Email'
          defaultValue={user.email}
          register={register}
          error={errors.username} />
        <div className='mt-4 text-center'>
          <input type='submit' className='btn btn-lg btn-success w-100 mt-1' value='Update' />
          <Link to='/changepassword' className='btn btn-lg btn-danger w-100 mt-1'>Change Password</Link>
        </div>
      </form>
    </div>
  );
}

export default Settings;
