import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD3y0k2WPZNYBJewuhJjDnx6jYt8aQBFJg',
  authDomain: 'netflix-clone-bfaf3.firebaseapp.com',
  projectId: 'netflix-clone-bfaf3',
  storageBucket: 'netflix-clone-bfaf3.appspot.com',
  messagingSenderId: '920393498482',
  appId: '1:920393498482:web:9a906f5594e30ca32367eb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
