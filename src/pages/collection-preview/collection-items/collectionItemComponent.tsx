import React from 'react';
import './collectionItemsStyle.scss';

interface Props{
  name: string;
  imageUrl: string;
  id?: number;
  price: number;
}
const CollectionItem: React.FC<Props> = ({name, imageUrl, price}) => {

  return (
    <div className='collection-item'>
      <div className='collection-item-image' style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className='collection-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`₦ ${price}`}</span>
      </div>
    </div>
  )
}
export default CollectionItem;