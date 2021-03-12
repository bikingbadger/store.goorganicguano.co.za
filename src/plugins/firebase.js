import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC1q5RJkSx8fw7OcbpCUwPMPCPOwq9I6R4',
  authDomain: 'goorganics-42e5f.firebaseapp.com',
  projectId: 'goorganics-42e5f',
  storageBucket: 'goorganics-42e5f.appspot.com',
  messagingSenderId: '771945246359',
  appId: '1:771945246359:web:fea9308019c44e156543d2',
  measurementId: 'G-R5GTQ7D2V7'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

export default firebase
