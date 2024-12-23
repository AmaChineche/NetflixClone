import {initializeApp} from "firebase/app"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut }from 'firebase/auth'

import { addDoc, collection, getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyB8M4IL-8eEdUnbp2AYGf86W03x8SAHdX0",
    authDomain: "netflix-clone-fd6d0.firebaseapp.com",
    projectId: "netflix-clone-fd6d0",
    storageBucket: "netflix-clone-fd6d0.firebasestorage.app",
    messagingSenderId: "820409257410",
    appId: "1:820409257410:web:e8942378574933430b9a5b",
    measurementId: "G-MEG2Q8XCZV"
   } ;

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const  db = getFirestore(app)
 const signUp = async (name, email, password)=>{
    try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user; 
    await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
    });
    } catch (error) {
        console.log(error)
        alert(error);
    }
 }
 const login =async (email, password)=>{
    try {
    const res = await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        alert(error)
    }
 }
 const logout=()=>{
    signOut(auth);
 }
 export {auth, db, login, logout, signUp}