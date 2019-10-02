import React, { useState } from 'react';
import { collections } from '../../Fixtures';
import CollectionPreview from '../collection-preview/collectionPreviewComponent';

export interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
interface CollectionList {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[]
}
const Collections = () => {
  const [collectionList] = useState<Array<CollectionList>>([...collections]);

  return (
    <div>
      {collectionList.map(({id, title, items})=> {
        return <CollectionPreview key={id} title={title} items={items}/>
      })}
    </div>
  )
}

export default Collections;