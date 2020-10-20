import Layout from '../components/layout';
import {useState, useEffect} from 'react';
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios';
import { showErrorMessage, showSuccessMessage } from '../helpers/alerts';
import { API } from '../config';

// by searching like http://localhost:3000/login we will get this page or any other page just write name of file
const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        error: '',
        success: '',
        buttonText: 'Login'
    })

const {email, password, buttonText} = state;
    
const handleChange = () =>{};
const handleSubmit = (e) =>{
    e.preventDefault();
};

const signinForm = () =>
<form className onSubmit={handleSubmit}>
<div className="form-group">
    <label className="label1" for="">E-mail</label>
    <input type="email" onChange={handleChange('email')} value={email} className="input form-control" placeholder="Type Your Email" />
</div>
<div className="form-group">
    <label className="label1" for="">Password</label>
    <input type="password" onChange={handleChange('password')} value={password} className="input form-control" placeholder="Type Your Password" />
</div>
<div className="form-group">
    <button className="formbtn btn btn-outline-warning">{buttonText}</button>
</div>
<div className="form-group forgot">
        <a href="">Forgot Password?</a>
        </div>
</form>

return(
     <Layout>
<div className="container">
    <div className="row">
    <div className="col-md-5 register-left">
            <img src={"/images/r1.jpg"} alt="imageHere" />
            <h5>You only have to know one thing:</h5>
            <h3>You can learn Anything!</h3>
            <h1>Academic Earth</h1>
            <p>E-learning Platform</p>
            <button type="button" class="btn btn-primary">About</button>
            </div>
        <div className="full col-md-7 register-right">
            <h1>Login Here</h1>
            <br />
            {signinForm()}
            <br />
            {/* {JSON.stringify(state)} */}
        </div>
        </div>
        </div>
    </Layout>
);
};

export default Login;

