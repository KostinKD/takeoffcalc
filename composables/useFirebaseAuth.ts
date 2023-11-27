import {
    createUserWithEmailAndPassword,
    User,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    getAuth, signInWithRedirect, signInWithPopup

} from "@firebase/auth";
import {useNuxtApp, useState} from "nuxt/app";

export default function (){
    const {$auth} = useNuxtApp()

    const user = useState<User | null>("fb_user", () => null)

    const registerUser = async (email: string, password: string) : Promise<boolean> => {
        try {
            const userCreds = await createUserWithEmailAndPassword($auth, email, password)
            if (userCreds){
                user.value = userCreds.user
                return true
            }
        } catch (error: unknown){
            if (error instanceof Error) {
                console.log('Something went wrong', error)
            }
            return false
        }
        return false
    }
    const signInUser = async (email: string, password: string) : Promise<boolean> => {
        try {
            const userCreds = await signInWithEmailAndPassword($auth, email, password)
            if (userCreds){
                user.value = userCreds.user
                return true
            }
        } catch (error: unknown){
            if (error instanceof Error){
                console.log('Something went wrong', error)
            }
            return false
        }
        return false
    }
    const signInByGoogle = async (): Promise<boolean> => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth()
            auth.languageCode = "en"

            signInWithPopup(auth,provider).then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential?.accessToken
                user.value = result.user
                console.log('user', user.value)
                return true
            })
        } catch (error: unknown){
            if (error instanceof Error){
                console.log('Something went wrong', error)
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            }
            return false
        }
        return false
    }

    return {
        user,
        registerUser,
        signInUser,
        signInByGoogle,
    }
}