// app.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyBeybXIOg2B3BxOIDXNNpEezvZnSXBLjgg",
    authDomain: "tkd-web-eb522.firebaseapp.com",
    projectId: "tkd-web-eb522",
    storageBucket: "tkd-web-eb522.appspot.com",
    messagingSenderId: "113600377945",
    appId: "1:113600377945:web:e90a1362b2b2beb5beed48",
    measurementId: "G-DW32VRRDZJ"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

  