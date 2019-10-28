import React from 'react';

import { CustomButtonContainer } from './customButtonStyle';

interface Props {
  [restProps: string]: any;
}
const CustomBotton: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  children, ...props}) => {

  return(
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  )
}

export default CustomBotton;