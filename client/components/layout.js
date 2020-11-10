
// import head in nextjs
import Head from 'next/head';
import Link from 'next/link';
import { isAuth, logout } from '../helpers/auth'
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// we are using link so that the page cannot refresh when we click on page in nav-bar

// we can also use React.fragment instead of div

// implementing progress
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

// destructuring children ("Hello Next from index.js")
const Layout = ({children}) => {
    
// now use head section
const Head = () => (
    <React.Fragment>
    {/* bootstrap CSS CDN */}
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
    {/*  nprogress cdn we can also use it without cdn by loading css (next.config.js)*/}
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link> */}

    <link rel="stylesheet" href="/static/css/styles.css"></link>
    
    </React.Fragment>
);

    const nav = () => (
        <ul className="nav nav-tabs bg-secondary">
            <li className="nav-item">
            <Link href="/">
            <a className="nav-link text-white" href="/">Home</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/user/link/create">
            <a className="nav-link text-white btn btn-success"  style={{borderRadius: '0px'}} href="/">Submit a link</a>
            </Link>
            </li>
            

{/* now show login register button if they are not logged in */}
{
    !isAuth() && (
        <React.Fragment>
        <li className="nav-item">
            <Link href="/login">
            <a className="nav-link text-white" href="/login">Login</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/register">
            <a className="nav-link text-white" href="/register">Register</a>
            </Link>
            </li>
            </React.Fragment>
    )}


{/* create user or admin on nav bar */}
            {
                isAuth() && isAuth().role === 'admin' && (
                    <li className="nav-item ml-auto">
            <Link href="/admin">
            <a className="nav-link text-dark">{isAuth().name}</a>
            </Link>
            </li>   
                )}
            {
                isAuth() && isAuth().role === 'subscriber' && (
                    <li className="nav-item ml-auto">
            <Link href="/user">
            <a className="nav-link text-dark">{isAuth().name}</a>
            </Link>
            </li>   
                )}


        {/* show logout button if logged in */}
            {
                isAuth() && (
                    <li className="nav-item">
            <a onClick={logout} className="nav-link text-white" href="/register">Logout</a>
            </li>
                )
            }
            {/* by giving href value(href="/login") in anchor tag we can directly open pages from navigation bar */}
        </ul>
    )
    return <React.Fragment>
        {/* we are executing nav here */}
       {Head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
}

export default Layout;