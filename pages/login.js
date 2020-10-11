import Layout from '../components/layout'

// by searching like http://localhost:3000/login we will get this page or any other page just write name of file
const Login = () => {

    return <Layout>
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
            <h1>Signin Here</h1>
            <br />
            {/* {signinForm()} */}
            <br />
            {/* {JSON.stringify(state)} */}
        </div>
        </div>
        </div>
    </Layout>
}

export default Login;

