import firebase from 'firebase';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAJVPyctY3ix8JkvYkKk8rPjiyNLYESD2g",
  authDomain: "clipboard-8785b.firebaseapp.com",
  databaseURL: "https://clipboard-8785b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "clipboard-8785b",
  storageBucket: "clipboard-8785b.appspot.com",
  messagingSenderId: "1038845772786",
  appId: "1:1038845772786:web:c12e7732fcdd237194216b",
  measurementId: "G-43NPLHLNQ6"
};

const app = firebase.initializeApp(config);

const db = app.database();
export const clipboardRef = db.ref('clipboard');
