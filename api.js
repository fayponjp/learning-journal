import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, orderBy, query, limit } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "programming-journal.firebaseapp.com",
  projectId: "programming-journal",
  storageBucket: "programming-journal.firebasestorage.app",
  messagingSenderId: "990208227924",
  appId: "1:990208227924:web:d0c1b7d36ab63d36e30bc1"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const journalEntriesCollectionRef = collection(db, "journal-entries")

export async function getJournalEntries(qty = 10) {
  const docsSnapShot = await getDocs(query(journalEntriesCollectionRef, orderBy("datestamp", "asc"), limit(qty)))
  const entries = docsSnapShot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  return entries
}

export async function getJournalEntry(id) {
  const docRef = doc(db, "journal-entries", id)
  const docSnapshot = await getDoc(docRef)
  return {
    ...docSnapshot.data(),
    id: docSnapshot.id
  }
}