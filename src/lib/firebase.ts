import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAFdEP4NcyXIUYzWDfGukcVc-O7Smfl9u0',
  authDomain: 'eyego-dashboard-e74a8.firebaseapp.com',
  projectId: 'eyego-dashboard-e74a8',
  storageBucket: 'eyego-dashboard-e74a8.firebasestorage.app',
  messagingSenderId: '210645438710',
  appId: '1:210645438710:web:a3b366e46af8e788ea5cd7',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
