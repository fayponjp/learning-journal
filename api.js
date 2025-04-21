import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/app';

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

export async function getJournalEntries() {
    const docsSnapShot = await getDocs(journalEntriesCollectionRef)
    const entries = docsSnapShot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return entries
}