import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { api } from './global';
import sltLogo from './img/sltLogo.png';
import emailIcon from './img/email.png';
import passwordIcon from './img/password.png';
export default function Login() {
    const navigate = useNavigate();

    const LoginValidationSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginValidationSchema,
        onSubmit: (values) => {
            login(values);
        },
    });

    const login = async (values) => {
        let data = await fetch(`${api}/login`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
        })
        if (data.status === 400) {
            const result = await data.json();
            alert(result.message);
        } else {
            const result = await data.json();
            localStorage.setItem("storetoken", result.token);
            alert("Login succesfull");
            navigate("/home");
        }
    }
    return (
        <>
            <div className='sltLogo'>
                <img src={sltLogo} alt='logo' />
                <div className='login-text' >
                    <div className='login-heading'>Login</div>
                    <div>Login to your SLT account</div>
                </div>

            </div>
            <form className='login' onSubmit={formik.handleSubmit}>
                <div className='form'>
                    <div className='email'>
                        <span>
                            <img src={emailIcon} alt='email icon'></img>
                        </span>
                        <input
                            placeholder='Enter your email'
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && formik.errors.email}
                            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        />
                    </div>
                    <div className='password'>
                        <span>
                            <img src={passwordIcon} alt='password icon'></img>
                        </span>
                        <input
                            placeholder='Enter your Password'
                            type="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            name="password"
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && formik.errors.password}
                            helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                        />
                    </div>
                    <div>
                        <button className='login-button' type='submit'>Login</button>
                    </div>
                    <div className='register-link'>
                        <div>Don't have an account?</div>
                        <div><Link to="/register" style={{ textDecoration: 'none' }} className='link'>Sign Up</Link></div>
                    </div>
                </div>
            </form>
        </>
    )
}
