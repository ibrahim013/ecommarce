import { createSelector } from 'reselect';

const selectShopData = (state: any) => state.shop;

export const selectCollectionItems = createSelector([selectShopData], 
  shop => shop.collections
)