import { auth } from "../../firebase";

export default {
  register: (email, password) =>
    auth.createUserWithEmailAndPassword(email, password),
  login: (email, password) => auth.signInWithEmailAndPassword(email, password),
  logout: () => auth.signOut(),
  onChange: (callback) => auth.onAuthStateChanged(callback),
};
