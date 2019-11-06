
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collectionOverviewComponent';
import CollectionDetailPage from '../collection-detail/collectionDetailComponent';

import withSpinner from '../../components/spinner/withSpinnerComponent';
import { fetchShopCollectionAsync } from '../../redux/shop/shopActions';
import { createStructuredSelector } from 'reselect';
import { selectIsFetchingCollection } from '../../redux/shop/shopDataSelector';

const CollectionOverViewWithSpinner = withSpinner(CollectionOverview);
const CollectionDetailPageWithSpinner = withSpinner(CollectionDetailPage);

const Collections: React.FC<any> = ({ match, fetchShopCollectionAsync, isCollectionFetching}) => {

  useEffect(() => {
    fetchShopCollectionAsync();
  },[fetchShopCollectionAsync])

return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} 
      render={(props)=> <CollectionOverViewWithSpinner isLoading={isCollectionFetching} {...props}/>}
    />
    <Route path={`${match.path}/:collectionId`} 
      render={(props)=> <CollectionDetailPageWithSpinner isLoading={isCollectionFetching} {...props}/>}
    />
  </div>
)
  
}


const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsFetchingCollection
})

const mapDispatchToProps = (dispatch: any) =>({
  fetchShopCollectionAsync: () => dispatch(fetchShopCollectionAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Collections);