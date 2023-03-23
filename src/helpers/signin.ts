import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import {db, auth, googleAuthProvider} from "../config"
export async function signWithEmail(email: string, password: string){
	return new Promise((resolve, reject) => {
	try{
	signInWithEmailAndPassword(auth, email, password)
}catch(ex){
	console.log(ex)
}
})
}
export async function signWithGoogle(){
	await signInWithPopup(auth, googleAuthProvider).then(user => {
		console.log(user)
	})
}
