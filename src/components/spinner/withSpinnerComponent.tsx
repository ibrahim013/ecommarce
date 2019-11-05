import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './withSpinnerStyle';

const withSpinner = (WrappedComponent: any) => {
  //@ts-ignore
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ) :
    <WrappedComponent {...otherProps}/>
  }
  return spinner
}
export default withSpinner;