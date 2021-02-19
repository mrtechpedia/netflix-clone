import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCbsfuFVEulTHlZoGsSu9Fw60Qj_4ZM3s",
  authDomain: "netflix-clone-f7533.firebaseapp.com",
  projectId: "netflix-clone-f7533",
  storageBucket: "netflix-clone-f7533.appspot.com",
  messagingSenderId: "138180231846",
  appId: "1:138180231846:web:5b98185e26c80be3faea67",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
