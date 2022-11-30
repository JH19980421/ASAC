import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAI3ti2gSMugbHCcWa2EK04MfssLWIfBCM",
  authDomain: "upload-resume-e4ddb.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "upload-resume-e4ddb",
  storageBucket: "upload-resume-e4ddb.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

const fb = initializeApp(firebaseConfig);
const storage = getStorage(fb);

export default storage;
