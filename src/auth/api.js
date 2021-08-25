import { auth } from "../../firebase";

export default {
  signIn: (email, password) =>
    auth.createUserWithEmailAndPassword(email, password),
  signOut: () => auth.signOut(),
  onChange: (callback) => auth.onAuthStateChanged(callback),
};
