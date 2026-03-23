import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuoXV5XC37zwypjp9vZgZzGPqgMgx41w0",
  authDomain: "coffee-store-a3bde.firebaseapp.com",
  projectId: "coffee-store-a3bde",
  storageBucket: "coffee-store-a3bde.firebasestorage.app",
  messagingSenderId: "131346063322",
  appId: "1:131346063322:web:c17c644774a3f40e112ae3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);