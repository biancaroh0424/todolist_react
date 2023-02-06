// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { Firestore } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use


// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration


const firebaseConfig = {
apiKey: "AIzaSyBDCNQSXdmU8cOXf9qxjtY73HBHkasrNiQ",
authDomain: "todolist-react-bianca.firebaseapp.com",
projectId: "todolist-react-bianca",
storageBucket: "todolist-react-bianca.appspot.com",
messagingSenderId: "606295496468",
appId: "1:606295496468:web:17a22214ac17c8bca0d401"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig)


// 파이어베이스 DB객체 중에서 todos 항목을 다른 곳에서 사용하도록 공개
export const oTodosinDB = oDB.ref('todos');


export const db = getFirestore(app)
