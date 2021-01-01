import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBsvrf_UlOdzJ3GR7FyQlY5bUg3oGE9Uzg",
    authDomain: "whatsapp-mern-126af.firebaseapp.com",
    projectId: "whatsapp-mern-126af",
    storageBucket: "whatsapp-mern-126af.appspot.com",
    messagingSenderId: "402834961937",
    appId: "1:402834961937:web:84c3168d2698dcac8ea3b0",
    measurementId: "G-MY2BJRPDWV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db