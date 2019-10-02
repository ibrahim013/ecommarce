import React from 'react';
import { CollectionItem } from '../shop/shopComponent';
import './collectionPreviewStyle.scss';
import CollectionItems from './collection-items/collectionItemComponent';

interface Props{
  title: string;
  items: CollectionItem[];
}
const CollectionPreview: React.FC<Props> = ({title, items}) => {
  return(
    <div className='collection-preview'>
      <h1 className='collection-preview-title'>{title}</h1>
      <div className='preview'>
        {items.filter((item, idx) => idx < 4).map(({id, name, imageUrl, price,}) => {
          return <CollectionItems key={`item-preview${id}`} 
            name={name} imageUrl={imageUrl} price={price}/>
        })}
      </div>
    </div>
  )
}

export default CollectionPreview;