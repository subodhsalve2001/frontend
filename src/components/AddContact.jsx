import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
export default function AddContact() {
  const [contacts, setcontacts] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "john",
      mobile: "9848889955",
      url: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Please Enter Name !!"),
      mobile: yup
        .string()
        .max(10, "Please Enter Valid Mobile Number")
        .min(10, "Please Enter Valid Mobile Number")
        .required("Please Enter mobile number !!"),
      url: yup.string().required("please enter URL !"),
    }),
    onSubmit: (values, actions) => {
      console.log(values);
      setcontacts([...contacts, values]);
    },
  });
  return (
    <>
      {
        // JSON.stringify(errors)
      }
      <div className="container my-3">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card bg-warning">
              <div className="card-header text-center">
                <h1>ADD CONTACT</h1>
              </div>
              <div className="card-body">
                <form
                  className="form-control border-0 bg-success"
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className={
                      formik.errors.name && formik.touched.name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <br />
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.mobile && formik.touched.mobile
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />

                  <br />
                  <input
                    type="text"
                    name="url"
                    placeholder="Enter your url"
                    value={formik.values.url}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.url && formik.touched.url
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <br />
                  <button type="submit" className="btn btn-outline-primary">
                    <strong>Add Contact</strong>
                  </button>
                </form>
              </div>
            </div>
            {contacts.map((item, i) => (
              <div className="card my-3 " key={`${(item, i)}`}>
                <div className="card-body justify-content-evenly">
                  <div className="row">
                    <div className="col">
                      <img
                        className="rounded-circle"
                        src={item.url}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="col ">
                      <h1>{item.name}</h1>
                      <div className="d-flex">
                        <h4>
                          <i className="bi bi-phone"></i>
                          {item.mobile}
                        </h4>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex gap-4 sm-auto my-4 mx-4">
                        <button className="btn btn-warning">
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn btn-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
