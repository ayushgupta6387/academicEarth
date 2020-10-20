import Layout from '../components/layout';
import {useState, useEffect} from 'react';
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios';
import { showErrorMessage, showSuccessMessage } from '../helpers/alerts';
import { API } from '../config';
import {authenticate, isAuth} from '../helpers/auth'

// by searching like http://localhost:3000/login we will get this page or any other page just write name of file
const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        error: '',
        success: '',
        buttonText: 'Login'
    })

// by writing this useEffect-- if the user is logged in then whenever they try to open signin page it will redirect them to home page
useEffect(() => {
    isAuth() && Router.push('/');
}, []);

const {email, password, error, success, buttonText} = state;
    
const handleChange = name => e =>{
    // if previous error or success mgsg is showing hide that
    setState({...state, [name]: e.target.value, error: '', success: '', buttonText: 'Login'})
};
const handleSubmit = async e => {

    // to prevent reloading of page
    e.preventDefault();

    // this buttonText is shown when click on register me button
    setState({...state, buttonText: 'Logging in'})
    try{
        // console.table(name, email, password);
        // passing data to below end point(in backend) with respective data (making a post request with axios)
        // sending data from client side to backend
        // http://localhost:8000/api replaced by ${API} not working
        const response = await axios.post(`http://localhost:8000/api/login`, {
             email, 
             password
            // after writing this we get data on server because in register(in controller we have written req.body)
        });
        // console.log(response); // data > token/user
        authenticate(response, () => isAuth && isAuth().role === 'admin' ? Router.push('/admin') : Router.push('/user'));
            // when user successfully login redirect them to admin or user page
            
    }
        catch (error){
                console.log(error);
                setState({...state, buttonText: 'Login', error: error.response.data.error});
            }
    }


const LoginForm = () =>
<form className onSubmit={handleSubmit}>
<div className="form-group">
    <label className="label1" for="">E-mail</label>
    <input type="email" onChange={handleChange('email')} value={email} className="input form-control" placeholder="Type Your Email" required />
</div>
<div className="form-group">
    <label className="label1" for="">Password</label>
    <input type="password" onChange={handleChange('password')} value={password} className="input form-control" placeholder="Type Your Password" required />
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
            {/* {JSON.stringify(isAuth())}  by writing this we get all the details on login page of logged in user(id, name, role...)*/}
            <br />
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            {LoginForm()}
           
        </div>
        </div>
        </div>
    </Layout>
);
};

export default Login;

