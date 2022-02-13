// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getDatabase, set, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxBH41p6IBeu1itCnSden_cH1DguWvV6w",
  authDomain: "mdskrumi-portfolio.firebaseapp.com",
  projectId: "mdskrumi-portfolio",
  storageBucket: "mdskrumi-portfolio.appspot.com",
  messagingSenderId: "657068429761",
  appId: "1:657068429761:web:f6bf626162431e2bff9f40",
  measurementId: "G-G1BVMZ7RC3",
  databaseURL:
    "https://mdskrumi-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);

export const writeContactMeData = (
  fullName: string,
  email: string,
  phone: string,
  message: string
) => {
  set(ref(database, "contacts/" + fullName.trim()), {
    email,
    phone,
    message,
  });
};

export const fireLogEvent = (eventName: string) => {
  logEvent(analytics, eventName);
};

export default app;
