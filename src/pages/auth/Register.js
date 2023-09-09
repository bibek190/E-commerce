import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custom-input/CustomInput";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useState } from "react";

function Register() {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const input = [
    {
      id: 1,
      label: "First Name",
      type: "text",
      name: "fName",
      required: true,
    },
    {
      id: 5,
      label: "Last Name",
      type: "text",
      name: "lName",
      required: true,
    },
    {
      id: 2,
      label: "Email",
      type: "email",
      name: "Email",
      required: true,
    },
    {
      id: 3,
      label: "Password",
      type: "password",
      name: "Password",
      required: true,
    },
    {
      id: 2,
      label: "Confirm Password",
      type: "password",
      name: "ConfirmPassword",
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

export default Register;
