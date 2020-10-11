import '../public/static/css/styles.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }