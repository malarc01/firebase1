import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBkORw4pw8CPQbyQM2VqoPwrYcvC-0J_nk',
	authDomain: 'testwowo.firebaseapp.com',
	databaseURL: 'https://testwowo.firebaseio.com',
	projectId: 'testwowo',
	storageBucket: 'testwowo.appspot.com',
	messagingSenderId: '809719203986',
	appId: '1:809719203986:web:09845475a295439de2fe4b',
	measurementId: 'G-WHKH02X3ML'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
