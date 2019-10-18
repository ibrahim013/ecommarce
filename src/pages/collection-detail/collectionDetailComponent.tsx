import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../collection-preview/collection-items/collectionItemComponent';

import { selectCollection } from '../../redux/shop/shopDataSelector';

import './collectionDetailStyle.scss';

const CollectionDetailPage: React.FC<any> = ({ collection }) => {
  const {items, title} = collection;
  return(
    <div className='collection-detail-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map((item: any) => <CollectionItem key={item.id} item={item} /> )
        }   
      </div>
    </div>
  )
  
}

const mapStateToProps  = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionDetailPage);