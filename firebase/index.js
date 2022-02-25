// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB58Ehp4zZQGdpy0nV54Dl0iM9hr3Jldrg',
  authDomain: 'kevindevportafolio.firebaseapp.com',
  projectId: 'kevindevportafolio',
  storageBucket: 'kevindevportafolio.appspot.com',
  messagingSenderId: '947459842117',
  appId: '1:947459842117:web:1969a41239d61501ef032c',
  measurementId: 'G-7YQMWNT8S0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
