import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBaKr_F2Fovt9laf7p1yePC94vy0_UnCmk",
  authDomain: "super-income-97224.firebaseapp.com",
  databaseURL: "https://super-income-97224.firebaseio.com",
  projectId: "super-income-97224",
  storageBucket: "super-income-97224.appspot.com",
  messagingSenderId: "1070627667822",
  appId: "1:1070627667822:web:48fed680884f4ae75b4b7f",
  measurementId: "G-1PHLY9DB8D"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();