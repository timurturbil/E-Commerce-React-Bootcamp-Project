import firebase from 'firebase/app'
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDrLcNO6WNsFPawK7U-1zZJ7B4OOE3XGjE",
    authDomain: "e-commerce-app-d3dc3.firebaseapp.com",
    projectId: "e-commerce-app-d3dc3",
    storageBucket: "e-commerce-app-d3dc3.appspot.com",
    messagingSenderId: "297568282323",
    appId: "1:297568282323:web:88a5e189d00ff6b97d9626"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

/* .myButton17{
  background-color: black;
  width: 100px;
  height: 0px;
  margin: 10px;
  
}
.myButton18{
  background-color: black;
  width: 100px;
  height: 0px;
  margin: 10px;
} */
