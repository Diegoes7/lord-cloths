import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC-wQbGmoS-qkWY-79lu9SHusYHmlOe7Eg",
	authDomain: "lord-cloths-db.firebaseapp.com",
	projectId: "lord-cloths-db",
	storageBucket: "lord-cloths-db.appspot.com",
	messagingSenderId: "401329629113",
	appId: "1:401329629113:web:400cd863cf10aabd013868",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
			});
		} catch (error) {
			console.log('Error while creating a User', error.message);
		}
	}

	return userDocRef;
};
