import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDY3QUpEWBpOnYp0RITvDUYLHSWgCG8whU",
  authDomain: "blog-app-fccdf.firebaseapp.com",
  projectId: "blog-app-fccdf",
  storageBucket: "blog-app-fccdf.firebasestorage.app",
  messagingSenderId: "647327142824",
  appId: "1:647327142824:web:701998dc50b400281ac39d",
  measurementId: "G-HGCZSBN25G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
