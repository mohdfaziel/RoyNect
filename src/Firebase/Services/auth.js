import { auth } from "../config";
import {
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { login, logout } from "../../Store/User/UserSlice";
import toast from "react-hot-toast";

class AuthService {
  async initAuth(dispatch) {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            login({
              uid: user.uid,
              email: user.email,
              name: user.displayName,
              photoUrl: user.photoURL,
            })
          );
        } else {
          dispatch(logout());
        }
      });
    } catch (error) {
      console.error("Failed to Initialize Auth", error.message);
    }
  }

  async signInWithGoogle(dispatch) {
    try {
      const provider = new GoogleAuthProvider();
      const userInfo = await signInWithPopup(auth, provider);
      const user = userInfo.user;
      console.log(user);
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      );
      toast.success("Sign In Successful");
    } catch (error) {
      toast.error(error.message);
      console.error("Failed to Login with Google", error.message);
    }
  }

  async signOut(dispatch) {
    try {
      await signOut(auth);
      dispatch(logout());
      toast.success("Logout Successful");
    } catch (error) {
      toast.error(error.message);
      console.error("Failed to Logout", error.message);
      throw new Error("Failed to log out.");
    }
  }
}

const authService = new AuthService();
export default authService;