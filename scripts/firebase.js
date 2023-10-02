import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAF__3e0G7duYiJufDLVtW2SHi2_51LRXE",
  authDomain: "remember-me-673c0.firebaseapp.com",
  projectId: "remember-me-673c0",
  storageBucket: "remember-me-673c0.appspot.com",
  messagingSenderId: "1027194512354",
  appId: "1:1027194512354:web:060b2e2719bae9f6be4fbb",
  measurementId: "G-WEQYPDLMNT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const firebase = require("firebase");

const firestore = firebase.firestore();

const usersCollection = firestore.collection("users");

const docs = await usersCollection.get();

console.log(docs.docs);

/* async function criarColecao() {
  try {
    const colecaoRef = collection(db, "nomedacolecao");
    const novoDocumentoRef = await addDoc(colecaoRef, {
      campo1: "valor1",
      campo2: "valor2",
    });
    console.log("Documento criado com sucesso, ID:", novoDocumentoRef.id);
  } catch (error) {
    console.error("Erro ao criar o documento:", error);
  }
}

criarColecao();
 */
