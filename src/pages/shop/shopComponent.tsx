
import React from 'react';
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collectionOverviewComponent';
import CollectionDetailPage from '../collection-detail/collectionDetailComponent';


const Collections: React.FC<any> = ({ match }) => (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={ CollectionOverview }/>
      <Route path={`${match.path}/:collectionId`} component={ CollectionDetailPage }/>
    </div>
  )

  


export default Collections;