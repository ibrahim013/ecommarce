import React from 'react';
import './FormInputComponentStyle.scss';

interface Props {
  label: string;
  [props: string]: any;
}
const FormInput: React.FC<Props & React.HTMLAttributes<HTMLInputElement>> = ({label, ...props}) => {

  return(
    <div className='form-group'>
      <input  
        className='form-input'
        {...props}
      />
      {label ?
        (<label className={`${props.value.length ? 'shrink' : ''} form-input-label `}>{label}</label>) : null }
    </div>
  )
}

export default FormInput;