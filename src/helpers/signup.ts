import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config";
import { signWithEmail } from "./signin";

export async function signUpWithEmail(email: string, password: string) {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  await addDoc(collection(db, "users"), {
    email: response.user.email,
    provider: "email",
    uid: response.user.uid,
  });
  return new Promise((resolve, reject) => {
    signWithEmail(email, password)
      .then((response) => resolve(response))
      .catch((err) => err && reject(err));
  });
}
