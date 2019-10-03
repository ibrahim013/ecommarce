import React from 'react';
import './customButtonStyle.scss';

interface Props {
  [restProps: string]: any
}
const CustomBotton: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({children, ...restProps}) => {

  return(
    <button className='custom-button' {...restProps}>
      {children}
    </button>
  )
}

export default CustomBotton;