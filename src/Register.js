import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { api } from './global';
import emailIcon from './img/email.png';
import passwordIcon from './img/password.png';
import sltLogo from './img/sltLogo.png';
import userIcon from './img/user.png'


export default function Register() {
    const registerValidationSchema = yup.object({
        username: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required(),
    });
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            register(values);
        },

    });
    const register = (values) => {
        fetch(`${api}/register`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            alert("Successfully Registered");
        }).then(() => navigate("/"))
    }
    return (
        <>
            <div className='register-header'>
                <div className='register-heading'>Sign Up</div>
                <div>Become a SLT Community member</div>
                <div className='register-logo'>
                    <img src={sltLogo} alt='logo' />
                </div>
            </div>
            <form className='register' onSubmit={formik.handleSubmit}>
                <div className='form'>
                    <div className='email'>
                        <span>
                            <img src={userIcon} alt='email icon'></img>
                        </span>
                        <input
                            placeholder='Enter your UserName'
                            label="UserName"
                            onChange={formik.handleChange}
                            name="username"
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && formik.errors.username}
                            helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}
                        />
                    </div>
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
                            <img src={passwordIcon} alt='email icon'></img>
                        </span>
                        <input placeholder='Enter your Password'
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
                        <button className='login-button' type='submit'>Register</button>
                    </div>
                    <div className='register-link'>

                        <div>Already have an account?</div>
                        <div>
                            <Link to="/login" style={{ textDecoration: 'none' }} className='link'>Login</Link>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}
