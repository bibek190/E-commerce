import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config";
import { TBL_CATEGORY } from "../../utils/const";
import { setModalShow } from "../systemState/systemSlice";
import { setCategoryList } from "./categorySlice";

// SetDoc : It will either create or Update
export const addCategoryAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      const catPromise = setDoc(doc(db, TBL_CATEGORY, slug), rest, {
        merge: true,
      });
      toast.promise(catPromise, {
        pending: "In Progress...",
        error: "Error...",
        success: "Successfully Saved",
      });
      dispatch(fetchCategoriesAction());
    } catch (e) {
      console.log("error", e);
      toast.error("Error", e.message);
    }
  };

export const fetchCategoriesAction = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, TBL_CATEGORY));
    console.log(querySnapshot);
    const catList = [];
    querySnapshot.forEach((doc) => {
      const slug = doc.id;
      const data = doc.data();
      catList.push({
        ...data,
        slug,
      });
    });
    dispatch(setCategoryList(catList));
  } catch (e) {
    toast.error(e.message);
  }
};

export const deleteCategoryAction = (slug) => async (dispatch) => {
  try {
    const deletePromise = deleteDoc(doc(db, TBL_CATEGORY, slug));
    toast.promise(deletePromise, {
      pending: "In Progress...",
      error: "Error...",
      success: "Successfully Removed",
    });
    await deletePromise;
    dispatch(setModalShow(false));
    dispatch(fetchCategoriesAction());
  } catch (error) {}
};
