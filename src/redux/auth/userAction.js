import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase-config/config";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { setUser, updateStatus } from "./userSlice";

// creating user

export const createNewAdminUser = (userInfo) => async (dispatch) => {
  try {
    dispatch(updateStatus({ progress: true, success: false, error: false }));
    const respPending = createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );
    toast.promise(respPending, {
      pending: "Please wait...",
    });
    //

    const { user } = await respPending;

    dispatch(updateStatus({ progress: false, success: true, error: false }));
    const { email, phone, fName, lName } = userInfo;
    const data = { email, phone, fName, lName };
    // getting doc
    await setDoc(doc(db, "users", user.uid), data);
    toast.success("succesfully created");
  } catch (e) {
    toast.error(e.message);
    dispatch(updateStatus({ progress: false, success: false, error: true }));
  }
};

// login user

export const loginAdminUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const authSnapPromise = signInWithEmailAndPassword(auth, email, password);
      toast.promise(authSnapPromise, {
        pending: "In Progress",
      });
      const { user } = await authSnapPromise;
      dispatch(getUserInfo(user.uid));
      toast.success("Login successful");
    } catch (e) {
      toast.error(e.message);
    }
  };

export const getUserInfo = (uid) => async (dispatch) => {
  try {
    const userSnap = await getDoc(doc(db, "users", uid));
    if (userSnap.exists()) {
      const userData = userSnap.data();
      dispatch(setUser({ ...userData, uid }));
    }
  } catch (e) {
    toast.error(e.message);
  }
};
