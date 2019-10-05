import React, {useState} from 'react';
import './siginStyle.scss';

import FormInput from '../../components/Form-input/FormInputComponent';
import CustomBotton from '../custom-button/customButtonComponent';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch(err){
      console.log('error sigin in user', err.message)
    }
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
        <div className='button'>
          <CustomBotton type='submit'>Sign In</CustomBotton>
          <CustomBotton type='submit' onClick={ signInWithGoogle } isGoogleSignin>
            Sign In With Google
          </CustomBotton>
        </div>
        
      </form>
    </div>
  )
}

export default SignIn;