import React from 'react';
import './customButtonStyle.scss';

interface Props {
  [restProps: string]: any;
  isGoogleSignin?: boolean;
}
const CustomBotton: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  children,  isGoogleSignin,...restProps}) => {

  return(
    <button className={`${isGoogleSignin  ? 'google-sign-in' : '' } custom-button`}  {...restProps}>
      {children}
    </button>
  )
}

export default CustomBotton;