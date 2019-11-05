
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collectionOverviewComponent';
import CollectionDetailPage from '../collection-detail/collectionDetailComponent';
import { fireStore, convertCollectionSnapShotToMap } from '../../firebase/firebase.util';
import { updateCollection } from '../../redux/shop/shopActions';
import withSpinner from '../../components/spinner/withSpinnerComponent';

const CollectionOverViewWithSpinner = withSpinner(CollectionOverview);
const CollectionDetailPageWithSpinner = withSpinner(CollectionDetailPage);

const Collections: React.FC<any> = ({ match, updateCollections}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = fireStore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionData = await convertCollectionSnapShotToMap(snapshot);
      updateCollections(collectionData);
      setIsLoading(false);
    })

    return () => {
  
    };
  }, [updateCollections])

return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} 
      render={(props)=> <CollectionOverViewWithSpinner isLoading={isLoading} {...props}/>}
    />
    <Route path={`${match.path}/:collectionId`} 
      render={(props)=> <CollectionDetailPageWithSpinner isLoading={isLoading} {...props}/>}
    />
  </div>
)
  
}

  
const mapDispatchToProps = (dispatch: any) =>({
  updateCollections: (collectionMap: any) => dispatch(updateCollection(collectionMap))
})

export default connect(null, mapDispatchToProps)(Collections);