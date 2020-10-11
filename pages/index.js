// in nextJS we need not to import react it is available globally
// function Home() {
//     return <div>Hello Next!</div>
// } Or we can write

import Layout from '../components/layout'

// "hello next treat as a children in layout"
const Home = () => <Layout>Hello Next!</Layout>

export default Home;