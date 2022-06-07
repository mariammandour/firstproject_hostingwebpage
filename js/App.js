// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics,logEvent } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzz-OpiUTqFjbgjR9CFx-gjsyfk9SKshs",
    authDomain: "first-project-eaf79.firebaseapp.com",
    projectId: "first-project-eaf79",
    storageBucket: "first-project-eaf79.appspot.com",
    messagingSenderId: "617078133086",
    appId: "1:617078133086:web:e34ea80d19be08bbc47fcf",
    measurementId: "G-YG15LGZBSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');