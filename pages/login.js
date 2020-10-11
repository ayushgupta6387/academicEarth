import Layout from '../components/layout';
import {useState} from 'react';

// by searching like http://localhost:3000/login we will get this page or any other page just write name of file
const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        error: '',
        success: ''
    })

const {email, password} = state;
    
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
</form>

return(
     <Layout>
<div className="container">
    <div className="row">
    <div className="col-md-5 register-left">
            <img src={"/images/r1.jpg"} alt="imageHere" />
            <h3>Log in for more fun!</h3>
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

