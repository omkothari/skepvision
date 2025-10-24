import React from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYifJuG2IcRgkxmuZChW7O8v9pQ29soeQ",
  authDomain: "skep-vision.firebaseapp.com",
  databaseURL: "https://skep-vision-default-rtdb.firebaseio.com",
  projectId: "skep-vision",
  storageBucket: "skepvision.firebasestorage.app",
  messagingSenderId: "25921549170",
  appId: "1:25921549170:web:1e47a6861d8e53ed1fe3eb",
  measurementId: "G-PM63F7WBVL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export a React component so App.jsx can render <Ana />
export function Ana() {
  // no UI required — initialization side-effect already ran above
  return null;
}

export { app, analytics };