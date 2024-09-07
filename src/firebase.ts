import { initializeApp } from "firebase/app";
import { DocumentData, FirestoreDataConverter, getFirestore, QueryDocumentSnapshot } from "firebase/firestore";

const {
  VITE_API_ID,
  VITE_APP_NAME,
  VITE_API_KEY,
  VITE_MESSAGING_SENDER_ID
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: `${VITE_APP_NAME}.firebaseapp.com`,
  projectId: `${VITE_APP_NAME}`,
  storageBucket: `${VITE_APP_NAME}.appspot.com`,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_API_ID
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const converter = <T>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: T): DocumentData => {
      return data as unknown as DocumentData;
  },
  fromFirestore: (snap: QueryDocumentSnapshot) => ({ id: snap.id, ...snap.data() } as T)
});
