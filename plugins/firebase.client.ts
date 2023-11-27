// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  isSupported, getAnalytics } from "firebase/analytics";
import {defineNuxtPlugin, useNuxtApp, useRuntimeConfig} from "nuxt/app";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider} from "@firebase/app-check";

export default defineNuxtPlugin(nuxtApp=> {
    const config = useRuntimeConfig()

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
    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)
    const appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('6LdVbx4pAAAAAAnEGGO580B0ByZldtuKT_-Qd50R'),
        isTokenAutoRefreshEnabled: true
    })

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)

    console.log('init firebase')
})
