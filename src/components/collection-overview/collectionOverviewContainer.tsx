import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import withSpinner from '../spinner/withSpinnerComponent';
import { selectIsFetchingCollection } from '../../redux/shop/shopDataSelector';
import CollectionOverview from './collectionOverviewComponent';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollection
})

const CollectionOverViewContainer: any = compose(
  connect(mapStateToProps),
  withSpinner
  )(CollectionOverview);

  export default CollectionOverViewContainer;