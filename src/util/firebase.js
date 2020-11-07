import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

// const firebaseConfig = process.env.firebaseConfig;

const firebaseConfig = {
    apiKey: "AIzaSyBD20GcBvSegSo8z4q9MXeLq0ujfxJ5m1U",
    authDomain: "vuegram-7ac8c.firebaseapp.com",
    databaseURL: "https://vuegram-7ac8c.firebaseio.com",
    projectId: "vuegram-7ac8c",
    storageBucket: "vuegram-7ac8c.appspot.com",
    messagingSenderId: "489730596536",
    appId: "1:489730596536:web:028970021f87eab7f1de4d",
    measurementId: "G-L209TGNQZ1"
};
firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore();
const auth = firebase.auth();

//collection reference 
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

// export resources

export {
    db, auth, usersCollection, postsCollection, commentsCollection, likesCollection,
}