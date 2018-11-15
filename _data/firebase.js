import * as firebase from "firebase";

const firebaseConfigs = {
    apiKey: "AIzaSyD1A2JQC7AqRlv0-BNQ7mDgqmNJ_I6RtLY",
    authDomain: "coresql-b147a.firebaseapp.com",
    databaseURL: "https://coresql-b147a.firebaseio.com",
    projectId: "coresql-b147a"
}
firebase.initializeApp(firebaseConfigs);

export const databaseRef = firebase.database().ref();
const databasesRef = databaseRef.child("databases")

export const toArray = (obj, count) => Object.keys(obj).map((key, i) => ({
    key: Math.random() + i,
    keyName: key,
    numCount: count && obj[key][count] ? Object.keys(obj[key][count]).length : 0,
    ...obj[key]
}))

export const addDB = (name, collation) => databasesRef.child(name).set({
    collation,
    tables: []
})

export const addTable = (dbName, name, collation) => databasesRef.child(`${dbName}/tables/${name}`).set({
    collation,
    columns: []
})