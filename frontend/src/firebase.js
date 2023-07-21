import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHzUg98lgF_3dPUAvMeKY5f-AxPTgnefc",
  authDomain: "bajaj-allianz-92d64.firebaseapp.com",
  databaseURL: "https://bajaj-allianz-92d64-default-rtdb.firebaseio.com",
  projectId: "bajaj-allianz-92d64",
  storageBucket: "bajaj-allianz-92d64.appspot.com",
  messagingSenderId: "686625627849",
  appId: "1:686625627849:web:04d3f83e1e91383e863718",
  measurementId: "G-J6DZSJQY9N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const database = getAuth(app);

const provider = new GoogleAuthProvider();



export const signInWithGoogle = () => {
signInWithPopup(auth, provider).then((result) => {
const name = result.user.displayName;
const email = result.user.email;
const profilePic = result.user.photoURL;

console.log('itsfrom google', name);
console.log('itsfrom google', email);
console.log('itsfrom google', profilePic);
const ref = collection(firestore, "bajajGoogleAuthDetails")

let data = {
  googleName: name,
  googleEmail : email,
  googleProfilePic: profilePic
}
try {
  addDoc(ref, data);
} catch (e) {
  console.log(e);
}

  }).catch((error) => {
    console.log(error)
  })
}