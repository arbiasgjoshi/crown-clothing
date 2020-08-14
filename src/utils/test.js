import firebase from 'firebase/app'
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('0IsyRwvT3KFbwl5eJwUv').collection('cartItems');
firestore.collection('/users/0IsyRwvT3KFbwl5eJwUv/cartItems')