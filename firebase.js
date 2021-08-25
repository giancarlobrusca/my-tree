import firebase from "firebase/app";

import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAlxRzl3_Wa4e1oP_vvuwmilrobdLdOTEc",
  authDomain: "my-tree-77486.firebaseapp.com",
  projectId: "my-tree-77486",
  storageBucket: "my-tree-77486.appspot.com",
  messagingSenderId: "328270731254",
  appId: "1:328270731254:web:4e8480e78bd43f535a99d7",
  measurementId: "G-921WMPEKY2",
});

const auth = firebase.auth();

const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { auth, providers };
export default firebase;
