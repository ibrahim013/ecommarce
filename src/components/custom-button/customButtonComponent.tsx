import React from 'react';
import './customButtonStyle.scss';

interface Props {
  [restProps: string]: any;
  isGoogleSignin?: boolean;
  inverted?: boolean;
}
const CustomBotton: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  children,  isGoogleSignin, inverted,  ...restProps}) => {

  return(
    <button className={`${inverted  ? 'inverted' : '' } ${isGoogleSignin  ? 'google-sign-in' : '' } custom-button`}  {...restProps}>
      {children}
    </button>
  )
}

export default CustomBotton;