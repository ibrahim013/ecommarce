import { createSelector } from 'reselect';


const selectShopData = (state: any) => state.shop;



export const selectCollectionItems = createSelector([selectShopData], 
  shop => shop.collections
)

export const selectCollectionForPreview = 
  createSelector([selectCollectionItems],
    collections => Object.keys(collections).map(key => collections[key])
  );
  
export const selectCollection = (collectionUrlParam: any) => 
  createSelector([selectCollectionItems], 
    // @ts-ignore
    collections => collections[collectionUrlParam] 
  )