import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionDetailPage from "../collection-detail/collectionDetailComponent";
import CollectionOverViewContainer from "../../components/collection-overview/collectionOverviewContainer";

import withSpinner from "../../components/spinner/withSpinnerComponent";
import { fetchShopCollectionAsync } from "../../redux/shop/shopActions";
import { createStructuredSelector } from "reselect";
import { isFetchingCollectionCompleted } from "../../redux/shop/shopDataSelector";

const CollectionDetailPageWithSpinner = withSpinner(CollectionDetailPage);

const Collections: React.FC<any> = ({
  match,
  fetchShopCollectionAsync,
  isFetchingCollectionCompleted
}) => {
  useEffect(() => {
    fetchShopCollectionAsync();
  }, [fetchShopCollectionAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverViewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionDetailPageWithSpinner
            isLoading={!isFetchingCollectionCompleted}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetchingCollectionCompleted: isFetchingCollectionCompleted
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchShopCollectionAsync: () => dispatch(fetchShopCollectionAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
