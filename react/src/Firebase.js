import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "upload-resume-e4ddb.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

const fb = initializeApp(firebaseConfig);
const storage = getStorage(fb);

export default storage;
