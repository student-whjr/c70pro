import *as firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyBGfPihFEYMhz3DFqCyLozSFnEsTLeh-L8",
    authDomain: "wily-app123.firebaseapp.com",
    projectId: "wily-app123",
    storageBucket: "wily-app123.appspot.com",
    messagingSenderId: "181306783253",
    appId: "1:181306783253:web:8e143bcb1b5deb7ed4001c"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()