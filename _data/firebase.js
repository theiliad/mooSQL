import * as firebase from "firebase";

const firebaseConfigs = {
    apiKey: "AIzaSyD1A2JQC7AqRlv0-BNQ7mDgqmNJ_I6RtLY",
    authDomain: "coresql-b147a.firebaseapp.com",
    databaseURL: "https://coresql-b147a.firebaseio.com",
    projectId: "coresql-b147a"
}
firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database().ref();