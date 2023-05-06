
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyB5_wsYhe0_U-7Pua1ZM6zEcvlRvuP0x20",
    authDomain: "oonzoo-ecommerce.firebaseapp.com",
    projectId: "oonzoo-ecommerce",
    storageBucket: "oonzoo-ecommerce.appspot.com",
    messagingSenderId: "780041718741",
    appId: "1:780041718741:web:c655cc1d69bd0bdedc8b5c",
    measurementId: "G-2Z61244PD8"
  });


const auth = getAuth(firebaseApp);


export { auth };