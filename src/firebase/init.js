import firebase from "firebase"
import firestore from "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyB3KKI4liyucBBZx0qZVo9avwBGkYPF91g",
    authDomain: "vue-chat-backnd.firebaseapp.com",
    databaseURL: "https://vue-chat-backnd.firebaseio.com",
    projectId: "vue-chat-backnd",
    storageBucket: "vue-chat-backnd.appspot.com",
    messagingSenderId: "1009616835941",
    appId: "1:1009616835941:web:3cf845664305d92b2b3d8c"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
