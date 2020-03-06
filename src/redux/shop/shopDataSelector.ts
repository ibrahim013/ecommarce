import { createSelector } from "reselect";

const selectShopData = (state: any) => state.shop;

export const selectCollectionItems = createSelector(
  [selectShopData],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollectionItems],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectCollectionItems],

    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsFetchingCollection = createSelector(
  [selectShopData],
  shop => shop.isFetching
);

export const isFetchingCollectionCompleted = createSelector(
  [selectShopData],
  shop => !!shop.collections
);
