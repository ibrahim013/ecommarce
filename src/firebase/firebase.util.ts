import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAQgH-8ihpa8jcIQS2D_tpfnMm_Pn5UamU",
    authDomain: "mycloths-a0e50.firebaseapp.com",
    databaseURL: "https://mycloths-a0e50.firebaseio.com",
    projectId: "mycloths-a0e50",
    storageBucket: "",
    messagingSenderId: "30142375764",
    appId: "1:30142375764:web:d48016b64dc70f8edf4ac1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'Select_account'
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export const createUserProfileDocument = async(userAuth: any, otherData: any) => {
    if (!userAuth) return;

    const userRef = fireStore.doc(`users/${userAuth.uid}`);
    const userSnapShot = await userRef.get();

    if (!userSnapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch(err) {
            console.log('error creating data', err.message)
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async(collectionKey: string, objectToAdd: any) => {
    const collectionRef = fireStore.collection(collectionKey);
    const batch = fireStore.batch();
    objectToAdd.forEach((obj: any) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionSnapShotToMap = (collections: any) => {
    const transformedCollection = collections.docs.map((doc: any) => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator: any, collection: any) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
}
export default firebase;
