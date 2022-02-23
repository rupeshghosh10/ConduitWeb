const Signin = () => {
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='px-sm-5 px-4 py-4 border border-secondary rounded'>
        <form>
          <h1 className='text-center'>Sign In</h1>
          <p className='mb-4 text-center'>Please enter your email and password</p>
          <div className='form-floating'>
            <input type='email' className='form-control' id='email' placeholder='Email Address' />
            <label htmlFor='email'>Email Address</label>
          </div>
          <div className='form-floating'>
            <input type='password' className='form-control mt-1 ' id='password' placeholder='Password' />
            <label htmlFor='password'>Password</label>
          </div>
          <input type='submit' className='btn btn-lg btn-primary w-100 mt-1' value='Sign In' />
        </form>
        <div className='d-flex justify-content-evenly mt-4'>
          <p>Don't have an account?</p>
          <a href='/' className='fw-bold text-decoration-none link-primary'>Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Signin;
