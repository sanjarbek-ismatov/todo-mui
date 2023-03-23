import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config";
import { signWithEmail } from "./signin";

export async function signUpWithEmail(email: string, password: string){
	try{
	const response = await createUserWithEmailAndPassword(auth, email, password)
	await addDoc(collection(db, 'users'), {
		email: response.user.email,
		provider: 'email',
		uid: response.user.uid
	})
	} catch(ex){
		console.log(ex)
	}
	finally{
	const status =  await signWithEmail(email, password)
}
}