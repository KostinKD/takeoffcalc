// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {defineNuxtPlugin} from "nuxt/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default defineNuxtPlugin(()=> {
    const firebaseConfig = {
        apiKey: "AIzaSyB90aFtEPXsY0FN7QGoIyXONaSaR0fqN_4",
        authDomain: "takeoff-e883b.firebaseapp.com",
        projectId: "takeoff-e883b",
        storageBucket: "takeoff-e883b.appspot.com",
        messagingSenderId: "205100047676",
        appId: "1:205100047676:web:5882bd7597958cb13d5239",
        measurementId: "G-NGTJW8TL19"
    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    console.log('init firebase')
})
