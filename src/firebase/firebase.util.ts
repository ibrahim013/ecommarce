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
    promth: 'Select_account'
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

export default firebase;