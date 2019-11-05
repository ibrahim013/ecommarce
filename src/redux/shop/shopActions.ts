import { SHOP_TYPES } from '../types';

export const updateCollection = (collectionMap: any) => ({
  type: SHOP_TYPES.UPDATE_COLLECTIONS,
  payload: collectionMap
})
