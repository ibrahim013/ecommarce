import React,{ useState} from 'react';
import './signUpStyle.scss';
import FormInput from '../Form-input/FormInputComponent';
import CustomBotton from '../custom-button/customButtonComponent';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';




const SiginUP = () => {
  
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert('Password dont match')
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName})
      setDisplayName('')
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }catch(err){
      console.log(err.message)
    }
  }
  return(
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sigin-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          value={displayName}
          onChange={e => setDisplayName(e.currentTarget.value)}
          label='Display Name'
          required
        />
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
        <FormInput
          type='password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.currentTarget.value)}
          label='Confirm Password'
          required
        />
        <CustomBotton type='submit'>SIGN UP</CustomBotton>
      </form>
    </div>
  )
}
export default SiginUP;