import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

import { getFirestore } from "firebase/firestore";
// Required for side-effects
import "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAodniW578JZYe5UfqjpYgLfCHExB093MU",
  authDomain: "crane-emulation.firebaseapp.com",
  projectId: "crane-emulation",
  storageBucket: "crane-emulation.appspot.com",
  messagingSenderId: "113343919803",
  appId: "1:113343919803:web:fc1ebfece98737748b5b9e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth,app, db }