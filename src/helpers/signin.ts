import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { db, auth, googleAuthProvider } from "../config";
export function signWithEmail(email: string, password: string) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => resolve(res))
      .catch((err) => err && reject(err));
  });
}
export async function signWithGoogle() {
  await signInWithPopup(auth, googleAuthProvider).then((user) => {
    console.log(user);
  });
}
