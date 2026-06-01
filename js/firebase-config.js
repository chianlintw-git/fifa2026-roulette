// ====================================================
// 請將下方設定碼替換成你的 Firebase 專案設定
// Firebase Console → 專案設定 → 您的應用程式
// ====================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/*
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyAQ_2ZUIqVeRxrNWnvH0u9yVg8fZFsvW_c",
  authDomain: "fifa2026-cb7fb.firebaseapp.com",
  projectId: "fifa2026-cb7fb",
  storageBucket: "fifa2026-cb7fb.firebasestorage.app",
  messagingSenderId: "938505427169",
  appId: "1:938505427169:web:fa5b2d4f6e4ec9231b7fa0",
  measurementId: "G-M633SCSCF0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);