import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sideLinks = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Category",
      path: "/category",
    },
    {
      label: "Product",
      path: "/product",
    },
    {
      label: "Review",
      path: "/review",
    },
    {
      label: "Payment opt",
      path: "/payment-option",
    },
    {
      label: "orders",
      path: "/orders",
    },
    {
      label: "customers",
      path: "/customers",
    },
  ];
  return (
    <div>
      <nav>
        <div className="mt-4 text-center">Admin Account</div>
        <hr />
        <div>
          <ul className="list-unstyled">
            {sideLinks.map(({ label, path }, i) => (
              <li className="ms-4 p-3" key={i}>
                <Link to={path} className="nav-link">
                  {label}
                </Link>
              </li>
            ))}
            <hr />
            <li className="ms-4 p-3">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li className="ms-4 p-3">
              <Link to={"/register"} className="nav-link">
                Admin Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
