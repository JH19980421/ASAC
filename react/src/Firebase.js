import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAI3ti2gSMugbHCcWa2EK04MfssLWIfBCM",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "upload-resume-e4ddb",
  storageBucket: "upload-resume-e4ddb.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

export default initializeApp(firebaseConfig);
