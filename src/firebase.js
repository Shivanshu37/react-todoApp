  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdrwKIz274X90LdfaPN3NKm5bSwJ5WyL0",
    authDomain: "todo-app-4df84.firebaseapp.com",
    databaseURL: "https://todo-app-4df84-default-rtdb.firebaseio.com",
    projectId: "todo-app-4df84",
    storageBucket: "todo-app-4df84.appspot.com",
    messagingSenderId: "959839749993",
    appId: "1:959839749993:web:69e01619d39fcd34f45ff8",
    measurementId: "G-TCY1DHW0S4"
  });
  const db = firebaseApp.firestore();
  export default db;  