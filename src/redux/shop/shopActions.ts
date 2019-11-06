import { SHOP_TYPES } from '../types';
import { fireStore, convertCollectionSnapShotToMap } from '../../firebase/firebase.util';

export const fetchCollectionStart = () => ({
  type: SHOP_TYPES.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collectionMap: any) => ({
  type: SHOP_TYPES.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionError = (msg: string) => ({
  type: SHOP_TYPES.FETCH_COLLECTION_FAILURE,
  payload: msg
}) 

export const fetchShopCollectionAsync = () => (dispatch: any)=>  {
  console.log('=======out')
    try {
      console.log('=======in')
      dispatch(fetchCollectionStart())
      const collectionRef = fireStore.collection('collections');
      collectionRef.get().then(snapshot => {
        const collectionData = convertCollectionSnapShotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionData));
      })
    } catch(err) {
        dispatch(fetchCollectionError(err.message))
    }
}