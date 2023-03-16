import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDXAM1fnB5gIeJ1IWFDgQBZ94e8ApMiHBc",
  authDomain: "todo-8371c.firebaseapp.com",
  projectId: "todo-8371c",
  storageBucket: "todo-8371c.appspot.com",
  messagingSenderId: "114935969657",
  appId: "1:114935969657:web:fa51d982c16351bfafa1a8",
  measurementId: "G-FC63P85FZS",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
