import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custom-input/CustomInput";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminUser } from "../../redux/auth/userAction";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(loginAdminUser(form));
  };

  useEffect(() => {
    if (user.uid) {
      navigate("/dashboard");
    }
  }, [user]);

  const input = [
    {
      id: 1,
      label: "Email",
      type: "email",
      name: "email",
      required: true,
    },
    {
      id: 2,
      label: "Password",
      type: "password",
      name: "password",
      required: true,
    },
  ];
  return (
    <>
      <Header />
      <main className="main">
        <Form
          className="login p-5 mt-5 border rounded shadow "
          onSubmit={handleOnSubmit}
        >
          {input.map((item, i) => (
            <CustomInput {...item} key={i} onChange={handleOnChange} />
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
