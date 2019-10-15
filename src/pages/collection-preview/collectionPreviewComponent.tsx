import React from 'react';
import { CollectionItem } from '../../components/collection-overview/collectionOverviewComponent';
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
        {items.filter((item, idx) => idx < 4).map((item) => {
          return <CollectionItems key={`item-preview${item.id}`} 
            item={item}/>
        })}
      </div>
    </div>
  )
}

export default CollectionPreview;