import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBsKHBpJs8zEvV334p4imRzYPYtx30RgU4",
  authDomain: "fir-auth-bf78a.firebaseapp.com",
  databaseURL: "https://fir-auth-bf78a-default-rtdb.firebaseio.com",
  projectId: "fir-auth-bf78a",
  storageBucket: "fir-auth-bf78a.appspot.com",
  messagingSenderId: "720704092241",
  appId: "1:720704092241:web:64532fb11667fdf864a070",
  measurementId: "G-QF4LM6EZKY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
