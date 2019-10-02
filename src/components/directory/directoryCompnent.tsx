import React, { useState } from 'react';
import ItemListComponent from '../Menu/itemListComponent';
import { section } from '../../Fixtures';
import './directoryStyle.scss';

export interface DirectoryList {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
}

const Directory =  () => {
  const [sectionItem] = useState<Array<DirectoryList>>([...section])
  return (
    <div className='directory-menu'>
      {sectionItem.map(({id, imageUrl, title}) => (
        <ItemListComponent key={`Index-${id}`} title={title} image={imageUrl}/>
      ))}
    </div>
  )
}

export default Directory;