// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuH54IC4vRYmrY0L1Nq67cbtpV5S56P1g",
  authDomain: "servicehub-a1ccc.firebaseapp.com",
  projectId: "servicehub-a1ccc",
  storageBucket: "servicehub-a1ccc.firebasestorage.app",
  messagingSenderId: "664180580976",
  appId: "1:664180580976:web:d25e8595510c15e3c9cab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export Services
export { auth, db };