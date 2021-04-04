import firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyAdYAqKrMyKzv5ws5JO_Wr8Kmsl2XF0M2M",
   authDomain: "ecommerce-68c47.firebaseapp.com",
   projectId: "ecommerce-68c47",
   storageBucket: "ecommerce-68c47.appspot.com",
   messagingSenderId: "745717269617",
   appId: "1:745717269617:web:2e3410fce060721e6507d0"
 };
 

const fire = firebase.initializeApp(firebaseConfig);

export default fire;