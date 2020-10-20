import {useState, useEffect} from 'react'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { showErrorMessage, showSuccessMessage } from '../../../helpers/alerts';
import { API } from '../../../config';
import Layout from '../../../components/layout';


// by writing this we get the link which is sent to user by email, on separate page when user click on that link
import { withRouter } from 'next/router';

const ActivateAccount = ({router}) => {
    const [state, setState]= useState({
        name: '',
        token: '',
        buttonText: 'Activate Account',
        success: '',
        error: ''

    })
    return <Layout>{JSON.stringify(router)}</Layout>
};

export default withRouter(ActivateAccount);