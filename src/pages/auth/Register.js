import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custom-input/CustomInput";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createNewAdminUser } from "../../redux/auth/userAction";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { progress, success, error } = useSelector((state) => state.userInfo);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewAdminUser(form));
  };

  const inputFields = [
    {
      id: 1,
      label: "First Name *",
      type: "text",
      name: "fName",
      required: true,
    },
    {
      id: 5,
      label: "Last Name *",
      type: "text",
      name: "lName",
      required: true,
    },
    {
      id: 2,
      label: "Email *",
      type: "email",
      name: "email",
      required: true,
    },
    {
      id: 3,
      label: "Password *",
      type: "password",
      name: "password",
      required: true,
    },

    {
      id: 4,
      label: "Confirm Password *",
      type: "password",
      name: "confirmPassword",
      required: true,
    },
    {
      id: 6,
      label: "Phone",
      type: "number",
      name: "phone",
    },
  ];
  return (
    <>
      <AdminLayout title="Register Admin">
        {progress && "Loading...."}
        {error && "Error...."}
        {success && "success...."}
        <Form
          className="login p-4 mt-3 border rounded shadow "
          onSubmit={handleOnSubmit}
        >
          {inputFields.map((item, i) => (
            <CustomInput {...item} key={i} onChange={handleOnChange} />
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </AdminLayout>
    </>
  );
}

export default Register;
