// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAzqybVhg6a-UyzlRdFRIyGuj2tL9L-RI",
  authDomain: "boda-duarte-ruiz.firebaseapp.com",
  projectId: "boda-duarte-ruiz",
  storageBucket: "boda-duarte-ruiz.appspot.com",
  messagingSenderId: "2555323531",
  appId: "1:2555323531:web:52b1383f0434baeac6e08e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


// Get guests
export const getGuests = async () => {
    const guestsSnapshot = await getDocs(collection(db, "guests"))
    return guestsSnapshot
}

export const getGuestByPhone = async (phone) => {
    let response = null
    const guestsRef = collection(db, "guests")
    const q = query(guestsRef, where("phone_number", "==", phone))
    const guestsSnapshot = await getDocs(q)
    guestsSnapshot.forEach((doc) => {
        response = doc.data()
    })
    return response
}
