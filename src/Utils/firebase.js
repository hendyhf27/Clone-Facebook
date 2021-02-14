import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBYjiX52HW0hPIeJX2USuooV1sqS2_0eyc",
    authDomain: "facebook-clone-b49da.firebaseapp.com",
    projectId: "facebook-clone-b49da",
    storageBucket: "facebook-clone-b49da.appspot.com",
    messagingSenderId: "194661789887",
    appId: "1:194661789887:web:982107123faa9774be160a",
    measurementId: "G-DKGJ6Q78FW"
};

const firebaseApp = firebase.initialzeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;