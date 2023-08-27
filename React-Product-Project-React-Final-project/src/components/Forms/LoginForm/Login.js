import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import '../Form.css'; 


const LoginComponent = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '', 
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      const registrationData = JSON.parse(localStorage.getItem('registrationData'));

      if (
        registrationData &&
        registrationData.email === values.email &&
        registrationData.password === values.password
      ) {
        formik.resetForm();
        alert('Login successful!');
        navigate('/products');
      } else {
        alert('Invalid email or password');
      }
    },
  });

  return (
    <div>
      <h1 className="title">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className="text">Email:</label>
          <input type="email" placeholder="Enter your email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <br></br>
        <div>
          <label className="text">Password:</label>
          <input type="password" placeholder="Enter your password" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <br></br>
        <div className="text2">
        <button className="btn" type="submit">Login</button>
        <br></br>
        <br></br>
        <Link to='/signup'>Create an Account</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
