import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCIRC1VDNa_6govxseBjYXpnm2l6cFX1UI",
  authDomain: "cooking-ninja-site-5ec43.firebaseapp.com",
  projectId: "cooking-ninja-site-5ec43",
  storageBucket: "cooking-ninja-site-5ec43.appspot.com",
  messagingSenderId: "384803385601",
  appId: "1:384803385601:web:bed487ca6cde355254ab00"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }