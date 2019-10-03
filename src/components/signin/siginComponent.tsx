import React, {useState} from 'react';
import './siginStyle.scss';

import FormInput from '../../components/Form-input/FormInputComponent';
import CustomBotton from '../custom-button/customButtonComponent';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <div className='signin-wrapper'>
      <h1 className='title'>I already have an account</h1>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type='email' 
          value={email} 
          onChange={e => setEmail(e.currentTarget.value)}
          label='Email'
          required
          />
        <FormInput 
          type='password' 
          value={password} 
          onChange={e => setPassword(e.currentTarget.value)}
          label='Password'
          required
        />
        <CustomBotton type='submit'>Sign In</CustomBotton>
      </form>
    </div>
  )
}

export default SignIn;