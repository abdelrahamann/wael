import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate } from 'react-router-dom'; 
import '../Form.css'; 

const SignUp = () => {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required').min(8, 'Must be 8 characters'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('registrationData', JSON.stringify(values));

      formik.resetForm();

      alert('Registration successful!');

      navigate('/');
    },
  });

    return (
        <div>
        <h1 className="title">Sign Up</h1>
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
            <label className="text">Username:</label>
            <input type="text" placeholder="Enter your username" {...formik.getFieldProps('username')} />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
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
          <button className="btn" type="submit">Sign Up</button>
        <br></br>
        <br></br>
        <Link to='/login'>Already have an account</Link>
        </div>
        </form>
      </div>
    );
};

export default SignUp;
