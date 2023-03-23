import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import {db, auth, googleAuthProvider} from "../config"
export async function signWithEmail(email: string, password: string){
	try{
	const response = await signInWithEmailAndPassword(auth, email, password)
	console.log(response)
}catch(ex){
	alert('Your email is already fucked')
}
}
export async function signWithGoogle(){
	await signInWithPopup(auth, googleAuthProvider).then(user => {
		console.log(user)
	})
}