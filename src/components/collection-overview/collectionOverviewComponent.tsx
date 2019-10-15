import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../pages/collection-preview/collectionPreviewComponent';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from '../../redux/shop/shopDataSelector';

import './collectionOverviewStyle.scss';

interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[]
}

type  Props  = {
  collections: Collection[]
}

export interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionOverview: React.FC<Props> = ({ collections }) => (
  <div className='collection-overview'>
      {collections.map(({id, title, items})=> {
        return <CollectionPreview key={id} title={title} items={items}/>
      })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionItems
});
export default connect(mapStateToProps, null)(CollectionOverview);