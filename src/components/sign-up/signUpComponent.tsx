import React,{ useState} from 'react';
import './signUpStyle.scss';
import FormInput from '../Form-input/FormInputComponent';
import CustomBotton from '../custom-button/customButtonComponent';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';


interface UserCredentials {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SiginUP = () => {
  
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert('Password dont match')
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      setUserCredentials({ ...userCredentials,
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''} )
    }catch(err){
      console.log(err.message)
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    setUserCredentials({...userCredentials, [name] : value})
  }
  return(
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sigin-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomBotton type='submit'>SIGN UP</CustomBotton>
      </form>
    </div>
  )
}
export default SiginUP;