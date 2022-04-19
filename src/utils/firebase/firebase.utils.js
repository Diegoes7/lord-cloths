import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	query,
	getDocs,
} from "firebase/firestore";

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

// export const addCollectionAndDocuments = async (
// 	collectionKey,
// 	objectsToAdd
// ) => {
// 	const collectionRef = collection(db, collectionKey);
// 	const batch = writeBatch(db);

// 	objectsToAdd.forEach((object) => {
// 		const docRef = doc(collectionRef, object.title.toLowerCase());
// 		batch.set(docRef, object);
// 	});

// 	await batch.commit();
// 	console.log("done");
// };

export const getCollectionAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInfo = {}
) => {
	if (!userAuth) return;

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
				...additionalInfo,
			});
		} catch (error) {
			console.log("Error while creating a User", error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
