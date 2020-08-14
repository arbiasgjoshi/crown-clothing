import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWEQi-HcecBN7lRP5jMx6f2UYvFJb_VV8",
    authDomain: "crown-clothing-d0dac.firebaseapp.com",
    databaseURL: "https://crown-clothing-d0dac.firebaseio.com",
    projectId: "crown-clothing-d0dac",
    storageBucket: "crown-clothing-d0dac.appspot.com",
    messagingSenderId: "807819246",
    appId: "1:807819246:web:21ca981d67553e2d92e0ff",
    measurementId: "G-BRR0T83MDN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })    
        } catch {
            console.log('Error to create a user!');
        }
    }

    return userRef;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
