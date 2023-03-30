import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAfRevjjDKI4r3QUgGb4scRgpo7TUWkH0Q",
  authDomain: "olx-react-fa504.firebaseapp.com",
  projectId: "olx-react-fa504",
  storageBucket: "olx-react-fa504.appspot.com",
  messagingSenderId: "162144654791",
  appId: "1:162144654791:web:388c38a523321cc55f75e2",
  measurementId: "G-EX1414CTHZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);
