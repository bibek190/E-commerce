import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout";
import NewProductForm from "../../components/product/NewProductForm";

function AddNewProduct() {
  return (
    <AdminLayout title="Add Product">
      <Link to={"/product"}>
        <Button variant="secondary ms-2">&lt; Go Back</Button>
      </Link>
      {/* Form to capture the data */}
      <NewProductForm />
    </AdminLayout>
  );
}

export default AddNewProduct;
