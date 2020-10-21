import Layout from '../../components/layout'
import {useEffect, useState} from 'react';
import axios from 'axios';
import {API} from '../../config';
import {getCookie} from '../../helpers/auth';

// "hello next treat as a children in layout"

// ---------------------------------------------------------------------------------------------------------
// const User = () => {
//     const [todos, setTodos] = useState([]);
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos').then(response => setTodos(response.data));
//     }, [])
//     return <Layout>{JSON.stringify(todos)}</Layout>
// }

// --> differnce between below and above(useEffect) is in useEffect first empty array is created then after some time data comes but it is not in getInitialProps 

// server side rendering -- first data on server
const User = ({todos}) => <Layout>{JSON.stringify(todos)}</Layout>

User.getInitialProps = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // console.log('SERVER RENDERED', response); // you will get first data on server(vscode terminal) not on console 
    return {
        todos: response.data
    };
};
// -----------------------------------------------------------------------------------------



// const User = ({ user }) => <Layout>{JSON.stringify(user)}</Layout>;

// User.getInitialProps = async context => {
//     const token = getCookie('token', context.req);
//     try {
//         const response = await axios.get(`${API}/user`, {
//             headers: {
//                 authorization: `Bearer ${token}`,
//                 contentType: 'application/json'
//             }
//         });
//         return { user: response.data };
//     } catch (error) {
//         console.log(error)
//         if (error.response.status === 401) {
//             return { user: 'no user' };
//         }
//     }
// };



export default User;