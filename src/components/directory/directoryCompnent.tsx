import React, { useState } from 'react';
import ItemListComponent from '../Menu/itemListComponent';
import './directoryStyle.scss';

export interface DirectoryList {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
}

const Directory =  () => {
  const [sectionItem] = useState<Array<DirectoryList>>([
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5
  }])

  return (
    <div className='directory-menu'>
      {sectionItem.map(({id, imageUrl, title}) => (
        <ItemListComponent key={`Index-${id}`} title={title} image={imageUrl}/>
      ))}
    </div>
  )
}

export default Directory;