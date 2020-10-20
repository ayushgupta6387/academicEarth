import {useState} from 'react';
import Layout from '../components/layout';
// import eyes from '../public/images/r1.jpg';

import axios from 'axios';
import { showErrorMessage, showSuccessMessage } from '../helpers/alerts';
import { API } from '../config';


const Register = () => {

    // using hooks
    // array destructuring
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        // if two user try to register with same email then we will give error
        error: '',
        // after registering we will give success msg
        success: '',
        // we will change dynamically button text
        buttonText: 'Register Me'

    });

    // now we use directly like buttonText in form where buttn created
    const {name, email, password, error, success, buttonText} = state;

// using function inside another function e is an event
    const handleChange = (name) => (e) => {
        setState({...state, [name]: e.target.value, error: '', success: '', buttonText: 'Register Me'})
    };


    const handleSubmit = async e => {

        // to prevent reloading of page
        e.preventDefault();
    
        // this buttonText is shown when click on register me button
        setState({...state, buttonText: 'Registering'})
        try{
            // console.table(name, email, password);
            // passing data to below end point(in backend) with respective data (making a post request with axios)
            // sending data from client side to backend
            // http://localhost:8000/api replaced by ${API} not working
            const response = await axios.post(`http://localhost:8000/api/register`, {
                
                name,
                 email, 
                 password
                // after writing this we get data on server because in register(in controller we have written req.body)
            });
            console.log(response);
            setState({
                // after successfull submission all the fields needs to be empty 
                ...state,
                name:'',
                email:'',
                password:'',
                buttonText:'Submitted',
                // message is coming from controllers-->auth.js
                success:response.data.message
            });
        }
            catch (error){
                    console.log(error);
                    setState({...state, buttonText: 'Register', error: error.response.data.error});
                }
        }
    


// before applying async and await in handleSubmit
// const handleSubmit = e => {
    //     e.preventDefault();
    //     setState({ ...state, buttonText: 'Registering' });
    //     // console.table({ name, email, password });
    //     axios
    //         .post(`http://localhost:8000/api/register`, {
    //             name,
    //             email,
    //             password
    //         })
    //         .then(response => {
    //             console.log(response);
    //             setState({
    //                 ...state,
    //                 name: '',
    //                 email: '',
    //                 password: '',
    //                 buttonText: 'Submitted',
    //                 success: response.data.message
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setState({ ...state, buttonText: 'Register', error: error.response.data.error });
    //         });
    // };


// downloaded
        // const handleSubmit = async e => {
        //     e.preventDefault();
        //     setState({ ...state, buttonText: 'Registering' });
        //     try {
        //         const response = await axios.post(`${API}/register`, {
        //             name,
        //             email,
        //             password
        //         });
        //         console.log(response);
        //         setState({
        //             ...state,
        //             name: '',
        //             email: '',
        //             password: '',
        //             buttonText: 'Submitted',
        //             success: response.data.message
        //         });
        //     } catch (error) {
        //         console.log(error);
        //         setState({ ...state, buttonText: 'Register', error: error.response.data.error });
        //     }
        // };    

    const registerForm = () => 
    <form className onSubmit = {handleSubmit}>

        <div className="form-group">

        <label className="label1" for="">UserName</label>
        {/* by passing param. in ohandlehange func. we will know from where it is coming(from name or email...)  */}

            <input onChange={handleChange('name')}  value={name} type="text" className="input form-control" placeholder="Type Your name" required/>
        </div>

        <div className="form-group">

        <label className="label1" for="">E-mail</label>
            <input onChange={handleChange('email')} value={email} type="email" className="input form-control" placeholder="Type Your email" required/>
        </div>
        
        <div className="form-group">

        <label className="label1" for="">Password</label>
            <input onChange={handleChange('password')} value={password} type="password" className="input form-control" placeholder="Type Your password" required/>
        </div>

        <div className="form-group">
          <button className="formbtn btn btn-outline-warning">{buttonText}</button>
        </div>
        <div className="form-group forgot">
        <a href="">Forgot Password?</a>
        </div>

    </form>

    return ( 
    <Layout>
    <div className="container">
    <div className="row">
    <div className="col-md-5 register-left">
            <img src={"/images/r1.jpg"} alt="imageHere" />
            <h3>Join Us</h3>
            <h1>Academic Earth</h1>
            <p>E-learning Platform</p>
            <button type="button" class="btn btn-primary">About</button>
            </div>
        <div className="full col-md-7 register-right">
            <h1>Register Here</h1>
            <br />
            {/* these below 2 lines to show alerts */}
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            {registerForm()}
        </div>
        </div>
        </div>
    </Layout>
    );
};

export default Register;