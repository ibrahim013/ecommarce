import React from 'react';
import  { Link } from 'react-router-dom'
import { CollectionItem } from '../../components/collection-overview/collectionOverviewComponent';
import './collectionPreviewStyle.scss';
import CollectionItems from './collection-items/collectionItemComponent';

interface Props{
  title: string;
  items: CollectionItem[];
  linkUrl: string;
}
const CollectionPreview: React.FC<Props> = ({title, items, linkUrl}) => {
  return(
    <div className='collection-preview'>
      <Link to={linkUrl} className='collection-preview-title'>{title}</Link>
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